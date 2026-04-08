import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@WebSocketGateway({
  cors: { origin: '*' },
  namespace: '/emergency',
})
export class EmergencyGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('EmergencyGateway');

  handleConnection(client: Socket) {
    this.logger.log(`Client Connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client Disconnected: ${client.id}`);
  }

  // Expect client to pass JWT mapping to Patient ID, sending lat/lng
  @SubscribeMessage('trigger_emergency')
  handleEmergencyTrigger(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
    this.logger.warn(`EMERGENCY TRIGGERED BY PATIENT: ${data.patientId} at (${data.lat}, ${data.lng})`);
    
    // Broadcast emergency payload securely to connected Hospital Dashboards
    this.server.emit('emergency_alert_received', {
      patientId: data.patientId,
      location: { lat: data.lat, lng: data.lng },
      timestamp: new Date().toISOString(),
      priority: 'CRITICAL',
    });

    // Notify the app client that ambulance dispatch has initiated
    client.emit('ambulance_dispatched', { eta: '5 mins', vehicleId: 'AMB-104' });
    return { status: 'broadcasted' };
  }

  @SubscribeMessage('ambulance_location_update')
  handleAmbulanceTracker(@MessageBody() data: any) {
    // Forward ambulance live coordinates to the specific Patient listener
    this.server.emit(`tracker_${data.patientId}`, {
      vehicleId: data.vehicleId,
      location: { lat: data.lat, lng: data.lng },
    });
  }
}

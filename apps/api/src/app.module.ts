import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './common/prisma/prisma.module';
import { HospitalsModule } from './modules/hospitals/hospitals.module';
import { MedicalRecordsModule } from './modules/medical-records/medical-records.module';
import { EmergencyModule } from './modules/emergency/emergency.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://homedi_user:homedi_password@localhost:27017/homedi_db?authSource=admin'),
    PrismaModule,
    AuthModule,
    HospitalsModule,
    MedicalRecordsModule,
    EmergencyModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

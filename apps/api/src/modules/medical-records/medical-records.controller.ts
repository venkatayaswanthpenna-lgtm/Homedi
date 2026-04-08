import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { MedicalRecordsService } from './medical-records.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('records')
export class MedicalRecordsController {
  constructor(private readonly recordsService: MedicalRecordsService) {}

  @Roles('HOSPITAL_ADMIN', 'DOCTOR') // Only medical staff can upload/create
  @Post()
  async uploadRecord(@Body() createRecordDto: any) {
    // In reality, this would intercept a multipart file upload, send it to S3,
    // and pass the URL to this service.
    return this.recordsService.create(createRecordDto);
  }

  @Get() // Logged in Patient fetching their own records
  async getMyRecords(@Request() req) {
    // The JWT token guarantees the user ID is safe in req.user
    return this.recordsService.findAllForPatient(req.user.userId);
  }

  @Get(':id')
  async getRecordDetails(@Param('id') id: string) {
    return this.recordsService.findOne(id);
  }
}

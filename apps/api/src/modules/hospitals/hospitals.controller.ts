import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { HospitalsService } from './hospitals.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('hospitals')
export class HospitalsController {
  constructor(private readonly hospitalsService: HospitalsService) {}

  @UseGuards(JwtAuthGuard) // Protect endpoint requiring login 
  @Get()
  async searchHospitals(@Query() query: any) {
    return this.hospitalsService.findAll(query);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getHospitalDetails(@Param('id') id: string) {
    return this.hospitalsService.findOne(id);
  }
}

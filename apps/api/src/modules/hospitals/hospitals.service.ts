import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class HospitalsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(query?: any) {
    // Basic search filtering implementation
    const whereClause: any = {};
    if (query?.city) whereClause.city = { contains: query.city, mode: 'insensitive' };
    if (query?.specialty) {
       // Joins with Doctors to find specialities (Simple mock implementation for now)
       whereClause.doctors = { some: { specialty: { contains: query.specialty, mode: 'insensitive' } } };
    }
    
    return this.prisma.hospital.findMany({
      where: whereClause,
      include: {
        doctors: { take: 5 }, // Preload some doctors
      },
    });
  }

  async findOne(id: string) {
    const hospital = await this.prisma.hospital.findUnique({
      where: { id },
      include: { doctors: true, appointments: true },
    });
    if (!hospital) throw new NotFoundException('Hospital not found');
    return hospital;
  }
}

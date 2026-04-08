import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MedicalRecord, MedicalRecordDocument } from './schemas/medical-record.schema';

@Injectable()
export class MedicalRecordsService {
  constructor(
    @InjectModel(MedicalRecord.name) 
    private recordModel: Model<MedicalRecordDocument>
  ) {}

  async create(createRecordDto: any): Promise<MedicalRecord> {
    const createdRecord = new this.recordModel(createRecordDto);
    return createdRecord.save();
  }

  async findAllForPatient(patientId: string): Promise<MedicalRecord[]> {
    return this.recordModel.find({ patientId }).sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<MedicalRecord> {
    const record = await this.recordModel.findById(id).exec();
    if (!record) throw new NotFoundException('Medical Record not found');
    return record;
  }
}

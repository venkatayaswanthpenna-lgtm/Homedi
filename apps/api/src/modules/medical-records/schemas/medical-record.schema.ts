import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MedicalRecordDocument = MedicalRecord & Document;

export enum RecordType {
  PRESCRIPTION = 'PRESCRIPTION',
  LAB_REPORT = 'LAB_REPORT',
  SCAN = 'SCAN',
  CLINICAL_NOTE = 'CLINICAL_NOTE'
}

@Schema({ timestamps: true })
export class MedicalRecord {
  @Prop({ required: true, index: true })
  patientId: string; // Links to PostgreSQL User.id

  @Prop({ required: true, index: true })
  hospitalId: string; // Links to PostgreSQL Hospital.id

  @Prop({ required: true })
  doctorId: string;

  @Prop({ required: true, enum: RecordType })
  recordType: RecordType;

  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;

  @Prop({ required: true })
  fileUrl: string; // S3 Bucket path or local proxy path

  @Prop({ type: [String], default: [] })
  extractedKeywords: string[]; // Filled by the AI service

  @Prop({ default: false })
  isImmutable: boolean; // Triggered if patient is deceased
}

export const MedicalRecordSchema = SchemaFactory.createForClass(MedicalRecord);

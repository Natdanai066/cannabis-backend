import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Cannabis extends Document {
  @Prop({ required: true })
  strain: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  thcContent: number;

  // สามารถเพิ่ม properties อื่นๆ ตามต้องการ
}

export const CannabisSchema = SchemaFactory.createForClass(Cannabis);
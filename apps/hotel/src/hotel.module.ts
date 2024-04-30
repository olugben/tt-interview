import { Module } from '@nestjs/common';
import { HotelController } from './hotel.controller';
import { HotelService } from './hotel.service';
import { RmqModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true, validationSchema:Joi.object({
    RABBIT_MQ_URI:Joi.string().required(),
    RABBIT_MQ_HOTEL_QUEUE :Joi.string().required
  }),envFilePath:"./apps/hotel/.env"}), RmqModule],
  controllers: [HotelController],
  providers: [HotelService],
})
export class HotelModule {}

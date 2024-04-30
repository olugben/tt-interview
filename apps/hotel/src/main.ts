import { NestFactory } from '@nestjs/core';
import { HotelModule } from './hotel.module';
import { RmqService } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(HotelModule);
  const rmqservice=app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqservice.getOptions('HOTEL'));
  
  await app.startAllMicroservices();
}
bootstrap();
 
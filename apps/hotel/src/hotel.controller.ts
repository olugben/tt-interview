import { Controller, Get } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Get()
  getHello(): string {
    return this.hotelService.getHello();
  }
  @EventPattern('flight_created')
  async handleFlightCreated(@Payload() data: any, @Ctx() context: RmqContext  ){
    this.hotelService.bill(data);
  }
}

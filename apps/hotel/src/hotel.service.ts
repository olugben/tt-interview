import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class HotelService {
private readonly logger =new Logger(HotelService.name)
bill(data:any){
  this.logger.log("hottellling....", data)
}
  getHello(): string {
    return 'Hello World!';
  }
}

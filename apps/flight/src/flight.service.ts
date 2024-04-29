import { Inject, Injectable } from '@nestjs/common';
import { FlightRepository } from './schemas/flight.repository';
import { BookFlightRequest } from './dto/book-flight.request';
import { HOTEL_SERVICE } from './constants/services';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class FlightService {
constructor(private readonly flightRepository: FlightRepository, @Inject(HOTEL_SERVICE) private hotelClient:ClientProxy,){

}
async bookFlight(request: BookFlightRequest){
  const session =await this.flightRepository.startTransaction();
  try{
const order=await this.flightRepository.startTransaction();
await lastValueFrom(
  this.hotelClient.emit("flight_booked",{request})
);
await session.commitTransaction();
return order;
  }catch(err){
    await session.abortTransaction();
    return err
  }
  
  
  // return this.flightRepository.create(request)
}
async getFlight(){
  return this.flightRepository.find({})
}

}

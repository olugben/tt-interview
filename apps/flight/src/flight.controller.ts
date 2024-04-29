import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { FlightService } from './flight.service';
import { BookFlightRequest } from './dto/book-flight.request';
import { GoogleAuthGuard } from 'apps/auth/src/utils/Guards';

@Controller("auth")
export class FlightController {
  constructor(private readonly flightService: FlightService) {}
  @UseGuards(GoogleAuthGuard)
@Post()
async bookFlight(@Body() request : BookFlightRequest){
return this.flightService.bookFlight(request);
}

@UseGuards(GoogleAuthGuard)
@Get("google/redirect")
async getFlight(){
  return this.flightService.getFlight();
}

}

import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { Flight } from "./flight.schema";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model } from "mongoose";

@Injectable()
export class FlightRepository extends AbstractRepository<Flight>{
    protected readonly logger =new Logger(FlightRepository.name)
constructor(
    @InjectModel(Flight.name) flightModel: Model<Flight>,
    @InjectConnection() connection :Connection,

){
    super(flightModel, connection)
}
}
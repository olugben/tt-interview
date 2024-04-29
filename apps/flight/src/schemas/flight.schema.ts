import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "@app/common";
@Schema({versionKey:false})
export class Flight extends AbstractDocument{
    @Prop()
    flightid:string;
    @Prop()
    airline: string;
    @Prop()
    destination: string
    @Prop()
    price: number;

}

export const FlightSchema =SchemaFactory.createForClass(Flight)
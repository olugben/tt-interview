import { IsNotEmpty, IsPositive, IsString } from "class-validator";


export class BookFlightRequest{
@IsString()

flightid:string;
@IsString()
airline: string;
@IsString()
@IsNotEmpty()
destination:string;
@IsPositive()
price: number;
}
import { Module } from '@nestjs/common';
import { FlightController } from './flight.controller';
import { FlightService } from './flight.service';
import { ConfigModule } from '@nestjs/config';
import  * as Joi from 'joi';
import { DatabaseModule, RmqModule } from '@app/common';
import { FlightRepository } from './schemas/flight.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Flight, FlightSchema } from './schemas/flight.schema';
import { HOTEL_SERVICE } from './constants/services';
import { GoogleAuthGuard } from 'apps/auth/src/utils/Guards';
import { GoogleStrategy } from 'apps/auth/src/utils/GoogleStrategy';
import { SessionSerializer } from 'apps/auth/src/utils/Serializer';
import { AuthService } from 'apps/auth/src/auth.service';
import { PassportModule } from '@nestjs/passport';
import { Passport } from 'passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'apps/auth/src/auth.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true,
     validationSchema:Joi.object({MONGODB_URI: Joi.string().required(),
      PORT:Joi.string().required()
     }),
     envFilePath:"./apps/flight/.env"
    }), DatabaseModule,
    AuthModule,
  MongooseModule.forFeature([{name: Flight.name, schema: FlightSchema}]),
RmqModule.register({
  name:HOTEL_SERVICE,
}),
PassportModule,

    
  ],
  


  controllers: [FlightController],
  providers: [FlightService, FlightRepository,
     
    
  ],
})
export class FlightModule {}

import { NestFactory } from '@nestjs/core';
import { FlightModule } from './flight.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import * as session from 'express-session';
import * as passport from  'passport';

async function bootstrap() {
  const app = await NestFactory.create(FlightModule);
  app.use(
    session({
      secret: 'asiodasjoddjdoasddasoidjasiodasdjaiodd',
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 60000,
      },
    }),
  );
  
  app.use(passport.initialize());
  app.use(passport.session());
   app.useGlobalPipes(new ValidationPipe());
   const configService =app.get(ConfigService);

  await app.listen(configService.get('PORT'));
  
  
}
bootstrap();

import { NestFactory } from '@nestjs/core';

import * as session from 'express-session';
import * as passport from 'passport';
import { AuthModule } from './auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);

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
  await app.listen(3001);
}
bootstrap();
// import { NestFactory } from '@nestjs/core';
// import { AuthModule } from './auth.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AuthModule);
//   await app.listen(3000);
// }
// bootstrap();

import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super({
        clientID:"718832922861-7g3r8nqrgfv05vpgibn9svhgoc4gfcjl.apps.googleusercontent.com",
        clientSecret:"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",
        callbackURL:"http://localhost:3001/auth/google/redirect",
        scope:["profile", "email"],
         

    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
    const user = await this.authService.validateUser({
    
      email: profile.emails[0].value,
      displayName: profile.displayName,
    });
    console.log('Validate');
    console.log(user);
    return user || null;
  }
}
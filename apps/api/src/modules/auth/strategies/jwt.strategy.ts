import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'super-secret-development-key',
    });
  }

  async validate(payload: any) {
    // The decoded JWT payload. We can attach more database checks here if needed,
    // e.g. checking if the user is suspended or deleted.
    if (!payload.sub || !payload.email) {
      throw new UnauthorizedException();
    }
    
    return { userId: payload.sub, email: payload.email, role: payload.role };
  }
}

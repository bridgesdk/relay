import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@codemaskjs/nestjs-passport'
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt'
import { JwtConfig } from '../config'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly config: JwtConfig) {
        super()
    }

    configure(): StrategyOptions {
        return {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: this.config.JWT_PUBLIC_ACCESS_KEY,
            ignoreExpiration: false,
            algorithms: ['RS256']
        }
    }
}

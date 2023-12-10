import { IsString } from 'class-validator'

export class JwtConfig {
    @IsString()
    readonly JWT_PUBLIC_ACCESS_KEY: string

    @IsString()
    readonly JWT_PRIVATE_ACCESS_KEY: string

    @IsString()
    readonly JWT_ACCESS_TOKEN_EXPIRY: string = '1d'
}

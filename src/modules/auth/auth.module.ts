import { APP_GUARD } from '@nestjs/core'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { AuthGuard, PassportModule } from '@codemaskjs/nestjs-passport'
import { ConfigModule } from '@codemaskjs/nestjs-config'
import { GithubModule } from 'modules/github'
import { GithubStrategy, JwtStrategy } from './strategies'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { GithubConfig, JwtConfig } from './config'

@Module({
    imports: [
        JwtModule.registerAsync({
            global: true,
            imports: [
                ConfigModule.forFeature({
                    provides: [JwtConfig]
                })
            ],
            inject: [JwtConfig],
            useFactory: (config: JwtConfig) => ({
                publicKey: config.JWT_PUBLIC_ACCESS_KEY,
                privateKey: config.JWT_PRIVATE_ACCESS_KEY,
                verifyOptions: {
                    algorithms: ['RS256'],
                    ignoreExpiration: false
                }
            })
        }),
        PassportModule.register({
            imports: [
                ConfigModule.forFeature({
                    provides: [JwtConfig, GithubConfig]
                })
            ],
            strategies: [JwtStrategy, GithubStrategy]
        }),
        ConfigModule.forFeature({
            provides: [GithubConfig, JwtConfig]
        }),
        GithubModule
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        {
            provide: APP_GUARD,
            useClass: AuthGuard
        }
    ],
    exports: [AuthService]
})
export class AuthModule {}

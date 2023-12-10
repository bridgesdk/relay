import { Controller, Get } from '@nestjs/common'
import { AuthStrategy, Payload } from '@codemaskjs/nestjs-passport'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get('github')
    @AuthStrategy('github')
    async getAccessAndRefreshTokenFromGithub(@Payload() token: string) {
        return this.authService.getAccessTokenWithGithub(token)
    }
}

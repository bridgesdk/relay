import { Injectable, ForbiddenException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { GithubService } from 'modules/github'
import { GithubConfig, JwtConfig } from './config'

@Injectable()
export class AuthService {
    constructor(
        private readonly githubService: GithubService,
        private readonly githubConfig: GithubConfig,
        private readonly jwtService: JwtService,
        private readonly jwtConfig: JwtConfig
    ) {}

    getAccessTokenWithGithub(token: string) {
        return this.githubService
            .getRepository(token, this.githubConfig.GITHUB_ORGANISATION_NAME, this.githubConfig.GITHUB_REPOSITORY_NAME)
            .then(({ name, owner, permissions }) => {
                if (!permissions.push) {
                    throw new ForbiddenException()
                }

                const accessToken = this.getAccessToken({
                    type: 'github-access',
                    repository: name,
                    ownership: owner.login
                })

                return {
                    accessToken
                }
            })
            .catch(error => {
                console.error(error)

                throw new ForbiddenException()
            })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private getAccessToken(payload: any) {
        return this.jwtService.sign(payload, {
            algorithm: 'RS256',
            expiresIn: this.jwtConfig.JWT_ACCESS_TOKEN_EXPIRY
        })
    }
}

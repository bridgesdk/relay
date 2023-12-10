import { Strategy, StrategyOptions } from 'passport-github'
import { PassportStrategy } from '@codemaskjs/nestjs-passport'
import { Injectable } from '@nestjs/common'
import { GithubConfig } from '../config'

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
    constructor(private readonly config: GithubConfig) {
        super()
    }

    configure(): StrategyOptions {
        return {
            clientID: this.config.GITHUB_CLIENT_ID,
            clientSecret: this.config.GITHUB_CLIENT_SECRET,
            callbackURL: this.config.GITHUB_CALLBACK_URL,
            scope: ['read:org', 'repo']
        }
    }
}

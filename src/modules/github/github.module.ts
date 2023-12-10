import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { GithubService } from './github.service'

@Module({
    imports: [
        HttpModule.register({
            baseURL: 'https://api.github.com',
            headers: {
                Accept: 'application/json',
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
    ],
    providers: [GithubService],
    exports: [GithubService]
})
export class GithubModule {}

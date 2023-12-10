import { IsString, IsUrl } from 'class-validator'

export class GithubConfig {
    @IsString()
    readonly GITHUB_CLIENT_ID: string

    @IsString()
    readonly GITHUB_CLIENT_SECRET: string

    // eslint-disable-next-line camelcase
    @IsUrl({ host_whitelist: ['localhost'] })
    readonly GITHUB_CALLBACK_URL: string

    @IsString()
    readonly GITHUB_ORGANISATION_NAME: string

    @IsString()
    readonly GITHUB_REPOSITORY_NAME: string
}

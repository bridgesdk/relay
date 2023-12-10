import { IsInt, IsString } from 'class-validator'

export class ExpressConfig {
    @IsInt()
    readonly API_PORT: number

    @IsString()
    readonly API_HOST: string
}

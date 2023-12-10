import { Module } from '@nestjs/common'
import { ConfigModule } from '@codemaskjs/nestjs-config'
import { ResourceController } from './resource.controller'
import { ResourceService } from './resource.service'
import { ResourceConfig } from './config'

@Module({
    imports: [
        ConfigModule.forFeature({
            provides: [ResourceConfig]
        })
    ],
    providers: [ResourceService],
    controllers: [ResourceController]
})
export class ResourceModule {}

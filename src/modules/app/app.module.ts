import { ConfigModule } from '@codemaskjs/nestjs-config'
import { Module } from '@nestjs/common'
import { RelayModule } from 'modules/relay'
import { AuthModule } from 'modules/auth'
import { ResourceModule } from 'modules/resource'
import { AppService } from './app.service'
import { ExpressConfig } from './config'

@Module({
    imports: [
        ConfigModule.forRoot({
            provides: [ExpressConfig]
        }),
        AuthModule,
        ResourceModule,
        RelayModule
    ],
    providers: [AppService]
})
export class AppModule {}

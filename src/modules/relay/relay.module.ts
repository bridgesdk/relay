import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common'
import { RelayConnectMiddleware } from './middlewares'
import { RelayService } from './relay.service'

@Module({
    providers: [RelayService]
})
export class RelayModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(RelayConnectMiddleware).forRoutes({
            path: 'relay/connect',
            method: RequestMethod.POST
        })
    }
}

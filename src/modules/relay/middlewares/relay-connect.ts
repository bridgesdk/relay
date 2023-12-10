import { Request, Response } from 'express'
import { Injectable, NestMiddleware } from '@nestjs/common'
import { RelayService } from '../relay.service'

@Injectable()
export class RelayConnectMiddleware implements NestMiddleware {
    constructor(private readonly relayService: RelayService) {}

    use(request: Request, response: Response) {
        request.pause()
        this.relayService.connectToResource(request, response).catch(error => {
            console.error(error)
            response.end()
        })

        // console.log('connecting to relay:', request.headers)

        // response.setHeader('x-hello', 'world')
        // response.flushHeaders()

        // const socket = new Socket()

        // socket.on('connect', () => {
        //     console.log('connected to end stream')

        //     request.resume()
        // })

        // socket.on('error', error => {
        //     console.error(error)
        // })

        // request.pipe(socket)
        // socket.pipe(response)

        // socket.connect({
        //     host: '127.0.0.1',
        //     port: 27017
        // })
    }
}

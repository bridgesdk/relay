import { Request, Response } from 'express'
import { Injectable } from '@nestjs/common'

@Injectable()
export class RelayService {
    constructor() {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async connectToResource(request: Request, response: Response) {}
}

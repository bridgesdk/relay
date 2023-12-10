import { Controller, Get, Post, Req, Res } from '@nestjs/common'
import { ResourceService } from './resource.service'
import { Request, Response } from 'express'

@Controller('resource')
export class ResourceController {
    constructor(private readonly resourceService: ResourceService) {}

    @Get('list')
    getResources() {
        return this.resourceService.getResources()
    }

    @Post('connect')
    connectToResource(@Req() request: Request, @Res() response: Response) {
        console.log(request.url)
    }
}

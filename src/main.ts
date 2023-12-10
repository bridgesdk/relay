import { NestFactory } from '@nestjs/core'
import { AppModule } from './modules/app'

const bootstrap = async () => {
    const app = await NestFactory.create(AppModule)

    await app.listen(3000)
}

bootstrap().catch(error => {
    console.log(error)
})

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import helmet from '@fastify/helmet';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

dayjs.extend(utc);

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), {
        logger: ['log', 'warn', 'error', 'debug'],
        cors: {
            origin: '*',
        },
    });
    const configService: ConfigService = app.get(ConfigService);
    const docs = new DocumentBuilder()
        .setTitle('NestJS Boilerplate')
        .setDescription('NestJS, Fastify Base')
        .setVersion('1.0.0')
        .build();

    const swagger = SwaggerModule.createDocument(app, docs);
    SwaggerModule.setup('docs', app, swagger);

    console.log('process.env.NODE_ENV ~::', process.env.NODE_ENV);
    console.log('server port ~::', configService.get<string>('server_port'));

    await app.listen(configService.get<string>('server_port'), '0.0.0.0');
}

bootstrap();

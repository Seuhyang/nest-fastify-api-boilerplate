import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import helmet from '@fastify/helmet';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import admin from 'firebase-admin';
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';

dayjs.extend(utc);

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), {
        logger: ['log', 'warn', 'error', 'debug'],
        cors: {
            origin: '*',
        },
    });
    //
    const configService: ConfigService = app.get(ConfigService);

    //
    // const firebaseConfig = {
    //     apiKey: configService.get<string>('firebase_api_key'),
    //     authDomain: configService.get<string>('firebase_auth_domain'),
    //     projectId: configService.get<string>('firebase_project_id'),
    //     storageBucket: configService.get<string>('firebase_storage_bucket'),
    //     messagingSenderId: configService.get<string>('firebase_messaging_sender_id'),
    //     appId: configService.get<string>('firebase_app_id'),
    //     measurementId: configService.get<string>('firebase_measurement_id'),
    // }
    // const firebaseApp = initializeApp(firebaseConfig);
    // const firebaseAnalytics = getAnalytics(firebaseApp);

    const serviceAccount = {
        type: configService.get<string>('FIREBASE_TYPE'),
        projectId: configService.get<string>('FIREBASE_PROJECT_ID'),
        privateKeyId: configService.get<string>('FIREBASE_PRIVATE_KEY_ID'),
        privateKey: configService.get<string>('FIREBASE_PRIVATE_KEY'),
        clientEmail: configService.get<string>('FIREBASE_CLIENT_EMAIL'),
        clientId: configService.get<string>('FIREBASE_CLIENT_ID'),
        authUri: configService.get<string>('FIREBASE_AUTH_URI'),
        tokenUri: configService.get<string>('FIREBASE_TOKEN_URI'),
        authProviderX509CertUrl: configService.get<string>('FIREBASE_AUTH_PROVIDER_X509_CERT_URL'),
        clientX509CertUrl: configService.get<string>('FIREBASE_CLIENT_X509_CERT_URL'),
    };
    console.log('serviceAccount', serviceAccount.projectId, typeof serviceAccount.projectId);
    // firebase.
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
    //

    const docs = new DocumentBuilder()
        .setTitle('NestJS Boilerplate')
        .setDescription('NestJS, Fastify Base')
        .setVersion('1.0.0')
        .build();

    const swagger = SwaggerModule.createDocument(app, docs);
    SwaggerModule.setup('docs', app, swagger);

    console.log('process.env.NODE_ENV ~::', process.env.NODE_ENV);
    console.log('server port ~::', configService.get<string>('server_port'));

    await app.listen(configService.get<string>('server_port'), '0.0.0.0', async () => {
        const url = await app.getUrl();
        console.log(`running on ${url}`);
    });
}

bootstrap();

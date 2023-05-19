import { Module } from '@nestjs/common';
import dayjs from 'dayjs';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `.env.${process.env.NODE_ENV}`,
        }),
    ],
})
export class CoreModule {}

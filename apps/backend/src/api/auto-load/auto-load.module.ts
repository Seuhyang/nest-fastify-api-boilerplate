import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    imports: [
        SequelizeModule.forRoot({
            autoLoadModels: true,
            synchronize: true,
        }),
    ],
})
export class AutoLoadModule {}

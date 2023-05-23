import { Module } from '@nestjs/common';
import { ModelsService } from './models.service';

@Module({
    imports: [],
    providers: [ModelsService],
    exports: [ModelsService],
})
export class ModelsModule {}

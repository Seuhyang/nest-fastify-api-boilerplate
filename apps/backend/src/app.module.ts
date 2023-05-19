import { Module } from '@nestjs/common';
import { BackendController } from './backend.controller';
import { BackendService } from './backend.service';
import { CommonModule } from './common/common.module';
import { MailModule } from './mail/mail.module';
import { ApiModule } from './api/api.module';
import { TaskModule } from './task/task.module';
import { CoreModule } from './core.module';

@Module({
    imports: [CoreModule, CommonModule, MailModule, ApiModule, TaskModule],
    controllers: [BackendController],
    providers: [BackendService],
})
export class AppModule {}

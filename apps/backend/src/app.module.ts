import { Module } from '@nestjs/common';
import { BackendController } from './backend.controller';
import { BackendService } from './backend.service';
import { MailModule } from './mail/mail.module';
import { TaskModule } from './task/task.module';
import { CoreModule } from './core.module';
import { WebsocketModule } from './websocket/websocket.module';
import { CommonModule } from './common/common.module';
import { StudentModule } from './api/student/student.module';

@Module({
    imports: [CoreModule, MailModule, TaskModule, WebsocketModule, CommonModule, StudentModule],
    controllers: [BackendController],
    providers: [BackendService],
})
export class AppModule {}

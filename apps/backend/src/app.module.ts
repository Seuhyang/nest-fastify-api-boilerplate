import { Module } from '@nestjs/common';
import { BackendController } from './backend.controller';
import { BackendService } from './backend.service';
import { MailModule } from './mail/mail.module';
import { ApiModule } from './api/api.module';
import { TaskModule } from './task/task.module';
import { CoreModule } from './core.module';
import { WebsocketModule } from './websocket/websocket.module';

@Module({
    imports: [CoreModule, MailModule, ApiModule, TaskModule, WebsocketModule],
    controllers: [BackendController],
    providers: [BackendService],
})
export class AppModule {}

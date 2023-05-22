import { Module } from '@nestjs/common';
import { WebsocketService } from './websocket.service';
import { WebsocketGateways } from './websocket.gateway';

@Module({
    providers: [WebsocketService, WebsocketGateways],
    exports: [WebsocketService, WebsocketGateways],
})
export class WebsocketModule {}

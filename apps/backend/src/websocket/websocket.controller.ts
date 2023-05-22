import { Controller, Get, Logger, Post, Request } from '@nestjs/common';
import { WebsocketService } from './websocket.service';

@Controller('websocket')
export class WebsocketController {
    private readonly logger = new Logger(WebsocketController.name);
    constructor(private readonly websocketService: WebsocketService) {}

    @Post()
    async postWebSocket(@Request() req) {
        // const request = req.body;
        const str = 'Hello World!!';
        return str;
    }
}

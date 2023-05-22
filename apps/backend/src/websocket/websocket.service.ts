import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class WebsocketService {
    private readonly logger = new Logger(WebsocketService.name);
}

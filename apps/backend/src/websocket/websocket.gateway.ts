import { Logger, Post, Request } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { WebsocketService } from './websocket.service';
import { ConfigService } from '@nestjs/config';

interface ClientSocket extends Socket {
    sender: Sender;
}
interface Sender {
    idx: number;
    nickName: string;
    grade: string;
}
@WebSocketGateway({
    namespace: 'wsg',
    cors: { origin: '*' },
    pingInterval: 5000,
    pingTimeout: 15000,
})
export class WebsocketGateways implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly logger = new Logger(WebsocketGateways.name);
    private readonly secretKey: string;
    private readonly websocketPort: number;
    constructor(private readonly configService: ConfigService, private readonly websocketService: WebsocketService) {
        this.websocketPort = this.configService.get<number>('ws_port');
    }

    @WebSocketServer()
    websocketServer: Server;

    handleConnection(client: ClientSocket) {
        this.logger.debug(`client disconnect - ${client}`, client);
    }

    handleDisconnect(client: ClientSocket) {
        this.logger.debug(`client disconnect - ${client.id}`);

        this.websocketServer.fetchSockets().then((socket) => {
            this.logger.debug(`disconnected ${client.id},  client count : ${socket.length}`);
        });
        //     UserGateway.logger.debug(`${client.id} is disconnected...`);

        //     this.server.fetchSockets().then((sockets) => {
        //       UserGateway.logger.debug(`disconnected ${client.id},  client count : ${sockets.length}`);
        //     });
    }
}

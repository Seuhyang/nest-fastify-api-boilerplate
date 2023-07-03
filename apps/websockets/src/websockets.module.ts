import { Module } from '@nestjs/common';
import { WebsocketsController } from './websockets.controller';
import { WebsocketsService } from './websockets.service';

@Module({
  imports: [],
  controllers: [WebsocketsController],
  providers: [WebsocketsService],
})
export class WebsocketsModule {}

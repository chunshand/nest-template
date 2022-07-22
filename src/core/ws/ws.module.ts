import { Module } from '@nestjs/common';
import { WsStartGateway } from './ws.gateway';

@Module({
    providers: [WsStartGateway],
})
export class WsModule { }
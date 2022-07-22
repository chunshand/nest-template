import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from 'socket.io';
import * as WebSocket from 'ws';
@WebSocketGateway(3002, {
    cors: {
        origin: '*',
    },
})
export class WsStartGateway {
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('events')
    hello(@MessageBody() data: any, @ConnectedSocket() client: WebSocket): any {
        client.send(JSON.stringify({ g: 123 }))
        return {
            "event": "hello",
            "data": data,
            "msg": 'rustfisher.com'
        };
    }
}
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from 'socket.io';

@WebSocketGateway(3002, {
    cors: {
        origin: '*',
    },
})
export class WsStartGateway {
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('events')
    hello(@MessageBody() data: any): any {
        console.log(data);
        return {
            "event": "hello",
            "data": data,
            "msg": 'rustfisher.com'
        };
    }
}
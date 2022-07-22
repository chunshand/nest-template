import { INestApplication } from "@nestjs/common";
import { WsAdapter } from "./ws.adapter";
export function useWs(app: INestApplication) {
    app.useWebSocketAdapter(new WsAdapter()); // 使用我们的适配器
}
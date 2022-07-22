
import { useSwagger } from "./swagger";
import { useLogger } from "./log";
import { useWs } from "./ws";
import { INestApplication } from "@nestjs/common";
export function usePlugs(app: INestApplication) {
    useSwagger(app);
    // useLogger(app);
    useWs(app)
}
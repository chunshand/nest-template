
import { useSwagger } from "./swagger";
import { useLogger } from "./log";
export function usePlugs(app: any) {
    useSwagger(app);
    // useLogger(app);
}
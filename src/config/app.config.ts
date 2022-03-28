import { registerAs } from "@nestjs/config"
export default registerAs('app', () => ({
    verstion: "0.0.1"
}));

/**
 * 应用配置
 */
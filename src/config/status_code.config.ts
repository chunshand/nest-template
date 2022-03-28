import { registerAs } from "@nestjs/config"
export default registerAs('status_code', () => ({
    "200": "",
    "400": "语法错误",
    "401": "需要认证",
    "404": "请求地址错误",
}));
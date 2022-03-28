import { registerAs } from "@nestjs/config"
export default registerAs("geetest", () => ({
    'GEETEST_ID': 'GEETEST_ID',
    'GEETEST_KEY': 'GEETEST_KEY',
}));
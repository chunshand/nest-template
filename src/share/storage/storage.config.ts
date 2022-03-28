import { registerAs } from "@nestjs/config"
export default registerAs('storage', () => ({
    oss: {
        bucket: "bucket",
        region: 'region',
        accessKeyId: 'accessKeyId',
        accessKeySecret: 'accessKeySecret',
        endpoint: "endpoint"
    }
}));
import { registerAs } from "@nestjs/config"
export default registerAs('video', () => ({
    vod: {
        accessKeyId: "<accessKeyId>",
        accessKeySecret: "<accessKeySecret>",
        endpoint: 'http://vod.cn-shanghai.aliyuncs.com',
        apiVersion: '2017-03-21'
    }
}));
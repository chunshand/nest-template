import { registerAs } from "@nestjs/config"
export default registerAs("sms", () => ({
    accessKeyId: 'accessKeyId',
    accessKeySecret: 'accessKeySecret',
    endpoint: 'https://dysmsapi.aliyuncs.com',
    apiVersion: '2017-05-25',

    SignName: "SignName",
    // 发送验证码模板
    TemplateCode_Code: "TemplateCode_Code"
}));
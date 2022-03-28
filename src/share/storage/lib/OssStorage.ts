let OSS = require('ali-oss');

import { BaseStorage } from "./BaseStorage"
export class OssStorage implements BaseStorage {

    private client: any;
    private config: any;
    constructor(config: any) {
        this.client = new OSS(config);
        this.config = config;
    }
    /**
     * web直传 服务签名
     * @returns Promise
     */
    CreateUpload(opstion: any) {
        return new Promise(async (resolve) => {
            const date = new Date();
            date.setDate(date.getDate() + 1);
            const policy = {
                expiration: date.toISOString(), //设置Unix时间戳（自UTC时间1970年01月01号开始的秒数），用于标识该请求的超时时间。
                conditions: [
                    ["content-length-range", 0, 1048576000], //设置上传文件的大小限制。      
                ],
            };
            const formData = this.client.calculatePostSignature(policy);
            // 填写Bucket外网域名。
            const host = `http://${this.config.endpoint}`.toString();
            // 返回参数。
            const params = {
                expire: Math.floor(Date.parse(date.toISOString()) / 1000),
                policy: formData.policy, // 从OSS服务器获取到的Policy。
                signature: formData.Signature, // 从OSS服务器获取到的Signature。
                accessid: formData.OSSAccessKeyId,// 从OSS服务器获取到的OSS AccessKeyId。
                host, // 格式为https://bucketname.endpoint，例如https://bucket-name.oss-cn-hangzhou.aliyuncs.com。
                // callback: Buffer.from(JSON.stringify(callback)).toString("base64"),// 通过Buffer.from对JSON进行Base64编码。
                dir: opstion.dir,// 获取到的文件前缀。
            };
            resolve(params);
        });
    }

}


/***
 * 前端上传参考
 * 
 * https://help.aliyun.com/document_detail/322691.html
 *
 */
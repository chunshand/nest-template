import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import GeetestLib from "./lib/geetest_lib"
@Injectable()
export class GeetestService {
    private config: any
    constructor(
        private readonly configService: ConfigService,
    ) {
        this.config = this.configService.get<object>("geetest");
    }

    /**
     * 初始化
     */
    async register() {
        const gtLib = new GeetestLib(this.config.GEETEST_ID, this.config.GEETEST_KEY);
        const digestmod = "md5";
        const userId = "test";
        const params = { "digestmod": digestmod, "user_id": userId, "client_type": "web", "ip_address": "127.0.0.1" }
        let res = await gtLib.register(digestmod, params);
        return res.data;
    }

    /**
     * 验证
     */
    async validate(challenge: string, validate: string, seccode) {
        const gtLib = new GeetestLib(this.config.GEETEST_ID, this.config.GEETEST_KEY);
        let params = new Array();
        let result = await gtLib.successValidate(challenge, validate, seccode, params);
        return result.status === 1;
    }


}

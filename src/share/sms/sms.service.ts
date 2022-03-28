import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
const Core = require('@alicloud/pop-core');
import { randomNumber } from 'src/utils';
@Injectable()
export class SmsService {
    private config: any;
    private client: any;
    constructor(private readonly configService: ConfigService) {
        this.config = this.configService.get('sms');
        this.client = new Core(this.config);
    }

    /**
     * 
     * 发送验证码 
     * @param phone string 手机号
     */
    sendCode(phone: string) {
        return new Promise(async (resolve, reject) => {
            let code = randomNumber(4);
            let params = {
                "PhoneNumbers": phone,
                "SignName": this.config.SignName,
                "TemplateCode": this.config.TemplateCode_Code,
                "TemplateParam": JSON.stringify({
                    code: code
                })
            }
            let requestOption = {
                method: 'POST'
            };
            let r: any;
            try {
                r = await this.client.request('SendSms', params, requestOption);
            } catch (error) {
                reject(error);
            }
            if (r.Code == 'OK') {
                resolve(code);
            } else {
                reject(r);
            }
        });

    }
}

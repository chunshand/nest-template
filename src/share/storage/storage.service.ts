import { Injectable } from '@nestjs/common';

import { OssStorage } from './lib/OssStorage';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class StorageService {
    constructor(
        private readonly configService: ConfigService
    ) { }

    /**
     * 创建web直传签名
     * @param opstion 配置参数
     * @returns 
     */
     CreateUpload(opstion: any) {
        let config = this.configService.get<object>("storage.oss");
        let ossStorage = new OssStorage(config);
        return ossStorage.CreateUpload(opstion);
    }
}

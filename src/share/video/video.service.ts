import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
const RPCClient = require('@alicloud/pop-core').RPCClient;
@Injectable()
export class VideoService {
    private config: object;
    private client: any;
    constructor(
        private readonly configService: ConfigService
    ) {
        this.config = this.configService.get<object>("video.vod");
        this.client = new RPCClient(this.config);
    }
    /**
     * 创建视频上传凭证
     * @returns Promise
     */
    CreateUploadVideo(VideoInfo: object) {
        return new Promise(async (resolve) => {
            let res;
            try {
                res = await this.client.request("CreateUploadVideo", VideoInfo);

            } catch (error) {
                resolve(error.data);
                return;

            }
            resolve(res);
        });

    }
    /**
     * 刷新视频上传凭证
     * @returns Promise
     */
    RefreshUploadVideo(VideoId: string) {
        return new Promise(async (resolve) => {
            let res;
            try {
                res = await this.client.request("RefreshUploadVideo", {
                    VideoId: VideoId
                });

            } catch (error) {
                resolve(error.data);
                return;

            }
            resolve(res);
        });
    }

    /**
     * 获取视频信息
     * @returns Promise
     */
    GetPlayInfo(VideoId: string) {
        return new Promise(async (resolve) => {
            let res;
            try {
                res = await this.client.request("RefreshUploadVideo", {
                    VideoId: VideoId
                });

            } catch (error) {
                resolve(error.data);
                return;

            }
            resolve(res);
        });
    }

    /**
    * 获取视频播放凭证
    * @returns Promise
    */
    GetVideoPlayAuth(VideoId: string) {
        return new Promise(async (resolve) => {
            let res;
            try {
                res = await this.client.request("GetVideoPlayAuth", {
                    VideoId: VideoId
                });

            } catch (error) {
                resolve(error.data);
                return;

            }
            resolve(res);
        });
    }

}

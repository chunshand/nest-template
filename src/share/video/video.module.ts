import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import VideoConfig from "./video.config"
import { VideoService } from './video.service';
@Module({
    imports: [ConfigModule.forFeature(VideoConfig)],
    providers: [ConfigService, VideoService],
    exports: [ConfigService, VideoService]
})
export class VideoModule { }

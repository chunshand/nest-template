import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { CommonController } from './common.controller';
// 对象存储
import { StorageModule } from 'src/share/storage/storage.module';
import { StorageService } from 'src/share/storage/storage.service';
// 视频点播
import { VideoModule } from 'src/share/video/video.module';
import { VideoService } from 'src/share/video/video.service';
// 极验证
import { GeetestModule } from 'src/share/geetest/geetest.module';
import { GeetestService } from 'src/share/geetest/geetest.service';
// 邮箱
import { EmailModule } from 'src/share/email/email.module';
import { EmailService } from 'src/share/email/email.service';
// 表格
import { OfficeModule } from 'src/share/office/office.module';
import { OfficeService } from 'src/share/office/office.service';
// 短信
import { SmsModule } from 'src/share/sms/sms.module';
import { SmsService } from 'src/share/sms/sms.service';
// 测试resource 表
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resource } from './entities/resource.entity';
@Module({
  imports: [
    StorageModule,
    VideoModule,
    GeetestModule,
    EmailModule,
    OfficeModule,
    SmsModule,
    TypeOrmModule.forFeature([Resource])
  ],
  controllers: [CommonController],
  providers: [
    CommonService,
    StorageService,
    VideoService,
    GeetestService,
    EmailService,
    OfficeService,
    SmsService
  ]
})
export class CommonModule { }

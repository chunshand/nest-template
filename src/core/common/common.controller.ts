import { Controller, Get, StreamableFile } from '@nestjs/common';
import { CommonService } from './common.service';
import { StorageService } from 'src/share/storage/storage.service';
import { VideoService } from 'src/share/video/video.service';
import { GeetestService } from 'src/share/geetest/geetest.service';
import { EmailService } from 'src/share/email/email.service';
import { OfficeService } from 'src/share/office/office.service';
import { SmsService } from 'src/share/sms/sms.service';
import { Resource } from './entities/resource.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, In, Repository } from 'typeorm';

@Controller('common')
export class CommonController {
  constructor(
    private readonly commonService: CommonService,
    private readonly storageService: StorageService,
    private readonly videoService: VideoService,
    private readonly geetestService: GeetestService,
    private readonly emailService: EmailService,
    private readonly officeService: OfficeService,
    private readonly smsService: SmsService,
    @InjectRepository(Resource)
    private resourceRepository: Repository<Resource>,
    private readonly connection: Connection,

  ) { }

  @Get()
  async index() {
    // return this.storageService.CreateUpload({ dir: "/" });
    // return this.videoService.CreateUploadVideo();
    // return this.geetestService.register();
    // return this.emailService.send("1484082125@qq.com", "测试邮件");

    // let buff: Buffer = await this.officeService.createExcel([[1, 2, 3], [4, 5, 6]], "csv");
    // Promise<StreamableFile>
    // return new StreamableFile(buff);
    // this.smsService.sendCode("15200087997");

    // 事务操作 
    // https://blog.csdn.net/weixin_44828005/article/details/116477232

  }
}

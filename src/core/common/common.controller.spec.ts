import { Test, TestingModule } from '@nestjs/testing';
import { EmailModule } from 'src/share/email/email.module';
import { EmailService } from 'src/share/email/email.service';
import { GeetestModule } from 'src/share/geetest/geetest.module';
import { GeetestService } from 'src/share/geetest/geetest.service';
import { StorageModule } from 'src/share/storage/storage.module';
import { StorageService } from 'src/share/storage/storage.service';
import { VideoModule } from 'src/share/video/video.module';
import { VideoService } from 'src/share/video/video.service';
import { CommonController } from './common.controller';
import { CommonService } from './common.service';

describe('CommonController', () => {
  let controller: CommonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        StorageModule,
        VideoModule,
        GeetestModule,
        EmailModule
      ],
      controllers: [CommonController],
      providers: [CommonService,
        StorageService,
        VideoService,
        GeetestService,
        EmailService
      ],
    }).compile();

    controller = module.get<CommonController>(CommonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

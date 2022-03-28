import { Test, TestingModule } from '@nestjs/testing';
import { EmailModule } from 'src/share/email/email.module';
import { EmailService } from 'src/share/email/email.service';
import { GeetestModule } from 'src/share/geetest/geetest.module';
import { GeetestService } from 'src/share/geetest/geetest.service';
import { StorageModule } from 'src/share/storage/storage.module';
import { StorageService } from 'src/share/storage/storage.service';
import { VideoModule } from 'src/share/video/video.module';
import { VideoService } from 'src/share/video/video.service';
import { CommonService } from './common.service';

describe('CommonService', () => {
  let service: CommonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        StorageModule,
        VideoModule,
        GeetestModule,
        EmailModule
      ],
      providers: [CommonService,
        StorageService,
        VideoService,
        GeetestService,
        EmailService
      ],
    }).compile();

    service = module.get<CommonService>(CommonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

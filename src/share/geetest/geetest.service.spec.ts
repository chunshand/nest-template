import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import geetestConfig from './geetest.config';
import { GeetestService } from './geetest.service';

describe('GeetestService', () => {
  let service: GeetestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forFeature(geetestConfig)],
      providers: [ConfigService, GeetestService],
      exports: [ConfigService, GeetestService]
    }).compile();

    service = module.get<GeetestService>(GeetestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Module } from '@nestjs/common';
import { GeetestService } from './geetest.service';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config';
import geetestConfig from './geetest.config';
@Module({
  imports: [ConfigModule.forFeature(geetestConfig)],
  providers: [ConfigService, GeetestService],
  exports: [ConfigService, GeetestService]
})
export class GeetestModule { }

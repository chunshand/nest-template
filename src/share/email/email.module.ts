import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { ConfigModule } from '@nestjs/config';
import emailConfig from './email.config';
import { ConfigService } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forFeature(emailConfig)],
  providers: [ConfigService, EmailService],
  exports: [ConfigService, EmailService]
})
export class EmailModule { }

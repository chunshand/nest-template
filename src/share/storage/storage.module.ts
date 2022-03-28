import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { ConfigModule } from "@nestjs/config"
import StorageConfig from "./storage.config"
import { ConfigService } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forFeature(StorageConfig)],
  providers: [ConfigService, StorageService],
  exports: [StorageModule, ConfigService, StorageService]
})
export class StorageModule { }

import { Module } from '@nestjs/common';
// 模块加载
import {
  ImportModules,
  ProviderModules
} from "./load";
@Module({
  imports: [
    ...ImportModules,
  ],
  controllers: [],
  providers: [
    ...ProviderModules,
  ],
  exports: []
})
export class AppModule { }

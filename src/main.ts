import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { usePlugs } from "./plugs"
async function bootstrap() {
  // 创建实例
  const app = await NestFactory.create(AppModule);
  // 设置前缀
  app.setGlobalPrefix('api');
  // 添加插件
  usePlugs(app);
  // 监听
  await app.listen(8000);
}
bootstrap();

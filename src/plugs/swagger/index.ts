import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from "@nestjs/common";
export function useSwagger(app: INestApplication) {
    const config = new DocumentBuilder()
        .setTitle('接口文档')
        .setDescription('接口文档')
        // .setVersion('1.0')
        .setBasePath('api')
        .build();
    const document = SwaggerModule.createDocument(app, config, {
        // ignoreGlobalPrefix: true
    });
    let options = {
        // customCss: '.swagger-ui .topbar { display: none }'
    };
    SwaggerModule.setup('api', app, document, options);
}
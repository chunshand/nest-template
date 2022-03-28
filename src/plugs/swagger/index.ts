import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// let Version = require('src/../page')
export function useSwagger(app: any) {
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
// 异常过滤器
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import { isArray } from 'class-validator';


@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    constructor(
        private readonly configService: ConfigService
    ) { }
    catch(exception: HttpException, host: ArgumentsHost) {
        console.log("异常过滤器");
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const status = exception.getStatus();
        const ResponseData = exception.getResponse();
        let res = {
            // 服务状态
            status_code: status,
            // 业务状态
            code: 0,
            message: '',
            data: null,
            // path: request.url,
            // timestamp: new Date().toISOString(),
        };
        if (status == HttpStatus.OK) {
            res.code = ResponseData['code'];
            res.data = ResponseData['data'];
            res.message = ResponseData['message'];
        } else {
            if (typeof ResponseData === "object") {
                const status_code: object = this.configService.get<object>('status_code')
                const statusCode = ResponseData['statusCode'];
                switch (statusCode) {
                    // 语法错误
                    case 400:
                        res.code = statusCode;
                        res.message = isArray(ResponseData['message']) ? ResponseData['message'][0] : ResponseData['message'];
                        res.data = ResponseData['message'];
                        break;
                    default:
                        res.code = statusCode;
                        res.message = status_code[statusCode] ? status_code[statusCode] : "出现了一些问题";
                        break;
                }

            }
        }
        response
            .status(status)
            .json(res);
    }
}
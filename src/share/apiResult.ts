import {
    HttpException,
    HttpStatus
} from "@nestjs/common"

/**
 * 接口统一返回方法
 * 然后通过 http拦截器处理
 */
export class ApiResult {

    /**
     * 快速成功返回数据
     * @param message 
     */
    static success(data: any | Record<string, any> = {}, message: string | Record<string, any> = "成功", code: number = 1) {
        throw new HttpException({
            code,
            message,
            data
        }, HttpStatus.OK);
    }

    /**
     * 快速失败返回数据
     * @param message 消息文本
     */
    static error(data: Record<string, any> = {}, message: string | Record<string, any> = "失败", code: number = 0) {
        throw new HttpException({
            code,
            message,
            data
        }, HttpStatus.OK);
    }

    /**
     * 基本状态响应
     * @param number 状态码
     */
    static show(
        code: number = 0,
        data: Record<string, any> = {},
        message: string | Record<string, any> = "成功",
        status_code: HttpStatus = 200
    ) {
        throw new HttpException({
            code,
            message,
            data
        }, status_code);
    }
}
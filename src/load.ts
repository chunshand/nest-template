// 加载器 主要总结需要模块

// 配置
import ConfigModule from "src/config"
// 核心模块
import DefaultModules from "src/core"
// 其他模块
import ExplendModules from "src/module"
// 附加模块
import ShareModules from "src/share"
export const ImportModules = [
    ConfigModule,
    ...DefaultModules,
    ...ExplendModules,
    ...ShareModules
];


// 全局注册
import {
    // 守卫
    APP_GUARD,
    // 过滤器
    APP_FILTER,
    // 管道
    APP_PIPE,
    // 缓存
    APP_INTERCEPTOR
} from '@nestjs/core';

// 异常过滤器
import { HttpExceptionFilter } from "src/share/filter/http-exception.filter"


// 验证守卫
// https://github.com/typestack/class-validato
// https://www.cxybb.com/article/marendu/105745069
import { ValidationPipe } from '@nestjs/common';

// 权限守卫
import { RolesGuard } from "src/share/jwt/roles.guard"


// 全局 性质
export const ProviderModules = [
    {
        // 全局管道 主要为了参数验证
        provide: APP_PIPE,
        useClass: ValidationPipe
    },
    {
        // 全局异常过滤器 主要为了http请求返回格式统一
        provide: APP_FILTER,
        useClass: HttpExceptionFilter,
    },
    // {
    //     provide: APP_GUARD,
    //     useClass: RolesGuard,
    // },
    // 全局缓存
    // {
    //     provide: APP_INTERCEPTOR,
    //     useClass: CacheInterceptor,
    // },

];
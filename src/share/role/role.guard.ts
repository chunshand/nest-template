import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(
        private config?: any,
        private reflector?: Reflector
    ) { }

    canActivate(context: ExecutionContext): boolean {
        // 可以反射获取装饰器的参数
        // const roles = this.reflector.get<string[]>('role', context.getHandler());
        // if (!roles) {
        //     return true;
        // }
        console.log("role 守卫", this.config);
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        const url = request.url;
        console.log(url);
        if (!user.roles.find((item) => { return item = url })) {
            return false
        }
        return true;
    }
}
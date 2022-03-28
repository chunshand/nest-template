import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
    // constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        // const roles = this.reflector.get<string[]>('roles', context.getHandler());
        // if (!roles) {
        //     return true;
        // }
        console.log("role 守卫");
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        console.log(user);
        const url = request.url;
        console.log(url);
        return true;
    }
}
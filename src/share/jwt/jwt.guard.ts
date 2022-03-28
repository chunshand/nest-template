import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class JwtGuard extends AuthGuard('jwt') {
    constructor() {
        super()
    }
    /**
     * 重写 AuthGuard jwt 的 canActivate 方法 后面可以增加自己的逻辑
     */
    canActivate(context: ExecutionContext) {
        console.log("jwt守卫")
        return super.canActivate(context)
    }
}
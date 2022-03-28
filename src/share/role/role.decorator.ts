import { applyDecorators, UseGuards } from '@nestjs/common';
import { RoleGuard } from "./role.guard"
import { JwtGuard } from '../jwt/jwt.guard';
/**
 * 权限装饰器 绑定后默认绑定jwt装饰器
 * @returns 
 */
export function RoleDecorator(config?: any) {
    return applyDecorators(
        UseGuards(new JwtGuard(), new RoleGuard(config)),
    );
}
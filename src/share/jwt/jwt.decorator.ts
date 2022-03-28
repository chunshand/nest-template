import { applyDecorators, UseGuards } from '@nestjs/common';
import { JwtGuard } from "./jwt.guard"
export function JwtDecorator() {
    return applyDecorators(
        UseGuards(new JwtGuard()),
    );
}
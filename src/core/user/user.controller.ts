import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { TestDto } from "./dto/Test.dto"
import { ApiResult } from 'src/share/apiResult';
import { AuthService } from 'src/share/jwt/auth.service';
import { JwtDecorator } from "src/share/jwt/jwt.decorator"
import { UserService } from './user.service';

import { ApiTags } from "@nestjs/swagger"
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@ApiTags('user')
@Controller({
    path: 'user',
})
export class UserController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,

    ) { }
    /**
     * 账号登录
     * @param user 
     */
    @Post('login')
    async login(@Body() user: LoginUserDto) {
        let user_data = await this.userService.validateUser(user.username, user.password);
        if (!user_data) {
            ApiResult.error({}, "账号或密码错误");
        }
        // 注入权限路由
        user_data.roles = [];
        let res = await this.authService.sign(user_data);
        ApiResult.success(res);
    }

    /**
     * 创建账号
     * @param user 
     */
    @Post('create')
    async create(@Body() user: CreateUserDto) {
        let res = await this.userService.create(user);
        ApiResult.success(res);
        ApiResult.success([]);
    }


    /**
     * 测试方法 添加jwt装饰器 带有认证才会请求成功
     */
    @JwtDecorator()
    @Get('test')
    async test() {
        ApiResult.success();
    }

    // /**
    //  * 缓存测试 demo
    //  */
    // @Post('create')
    // async cacheTest() {
    //     this.userService.cacheTest();
    //     ApiResult.success([]);
    // }

}
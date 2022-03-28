import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService
    ) { }

    /**
     * 签名
     * @param user 
     * @returns 
     */
    async sign(user: any) {
        let payload = user;
        payload.sub = user.id;
        // 查询数据库 获取userid 
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
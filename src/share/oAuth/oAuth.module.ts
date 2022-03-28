import { Module } from "@nestjs/common";
import JwtModule from "src/share/jwt/jwt.module"
import { oAuthService } from "./oAuth.service"
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { AuthService } from "../jwt/auth.service";
import { ConfigModule } from "@nestjs/config";
import oAuthConfig from "./oAuth.config"
@Module({
    imports: [
        ConfigModule.forFeature(oAuthConfig),
        JwtModule,
        HttpModule
    ],
    providers: [
        oAuthService,
        ConfigService,
        AuthService
    ],
    exports: [oAuthService, JwtModule, AuthService]
})
export class oAuthModule { }
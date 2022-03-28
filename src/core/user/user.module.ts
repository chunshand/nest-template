import { CacheModule, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "./entities/user.entity"
import { oAuthModule } from 'src/share/oAuth/oAuth.module';
import { JwtStrategy } from 'src/share/jwt/jwt.strategy';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        oAuthModule,
        CacheModule.register(),
    ],
    controllers: [UserController],
    providers: [
        UserService,
        ConfigService,
        JwtStrategy
    ]
})
export class UserModule { }

import { Module } from '@nestjs/common';
import { JwtModule as jwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt.constants';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        // PassportModule.register({ defaultStrategy: 'jwt' }),
    ],
    providers: [JwtService],
    exports: [AuthService]
})
class JwtModule extends jwtModule { }
export default JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '7d' },
});

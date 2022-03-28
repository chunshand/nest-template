import { CacheModule } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from 'src/share/jwt/jwt.strategy';
import { oAuthModule } from 'src/share/oAuth/oAuth.module';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import dbModule from "src/share/db"

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        dbModule,
        TypeOrmModule.forFeature([User]),
        oAuthModule,
        CacheModule.register(),
      ],
      providers: [
        UserService,
        ConfigService,
        JwtStrategy
      ]
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

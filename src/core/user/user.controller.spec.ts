import { CacheModule } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from 'src/share/jwt/jwt.strategy';
import { oAuthModule } from 'src/share/oAuth/oAuth.module';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import dbModule from "src/share/db"

import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

describe('UserController', () => {
  let controller: UserController;
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        dbModule,
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
    }).compile();

    controller = module.get<UserController>(UserController);
    app = module.createNestApplication();
    await app.init();
  });
  it('should be defined', (done) => {
    expect(controller).toBeDefined();
    done();
  });

  // it('/login (POST)', async (done) => {
  //   request(app.getHttpServer())
  //     .post('/user/login')
  //     .expect(200)
  //     .end(function (err, res) {
  //       expect(res.body.code).toEqual(0);
  //       done();
  //     })
  // });
  // it('/login (POST)', async () => {
  //   let res = await request(app.getHttpServer())
  //     .post('/user/login')
  //     .send({
  //       username: "test",
  //       password: "test",
  //     })
  //   expect(res.body.code).toBe(1);
  // });
});

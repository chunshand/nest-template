import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { User } from "./entities/user.entity"
import { Cache } from 'cache-manager';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { md5_encode, randomString } from 'src/utils';

@Injectable()
export class UserService {
    constructor(
        // user表
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        // 缓存
        @Inject(CACHE_MANAGER)
        private cacheManager: Cache
    ) { }
    async validateUser(username: string = "", password: string = ""): Promise<any> {
        // 验证方法
        const user: any = await this.findOne({ username });
        if (user && md5_encode(password + user.salt) == user.password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    create(createUserDto: CreateUserDto) {
        let r = this.usersRepository.create(createUserDto);
        const salt = randomString(4);
        r.password = md5_encode(r.password + salt);
        r.salt = salt;
        return this.usersRepository.insert(r);
    }

    findAll() {
        return this.usersRepository.find();
    }
    findOne(where: any) {
        return this.usersRepository.findOne(where);
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return this.usersRepository.update(id, updateUserDto);
    }

    remove(id: number) {
        return this.usersRepository.delete(id);
    }

    /**
     * 缓存测试方法
     */
    async cacheTest() {
        await this.cacheManager.set('key', 'value', { ttl: 1000 });
        const value = await this.cacheManager.get('key');
        console.log(value);
    }
}

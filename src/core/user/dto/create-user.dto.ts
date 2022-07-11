import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty({ message: "username 不能为空" })
    @ApiProperty({ description: "账号", default: "" })
    username: string;

    @IsNotEmpty({ message: "password 不能为空" })
    @IsString({ message: "password 必须是字符串" })
    @ApiProperty({ description: '密码', default: "" })
    password: string;

    @IsString({ message: "类型 必须是字符串" })
    @ApiProperty({ description: '类型', default: "pc" })
    type: string;
}

// import { PartialType,OmitType} from '@nestjs/mapped-types';
import { PartialType, OmitType, ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class LoginUserDto extends OmitType(CreateUserDto, ['type'] as const)
{

}

// PartialType 生成一个类，并将字段全部设置可选
// OmitType 移除一些字段
// PickType 只保留的一些字段
// IntersectionType 组合两种类型


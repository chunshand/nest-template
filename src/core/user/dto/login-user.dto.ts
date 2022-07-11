// import { PartialType,OmitType} from '@nestjs/mapped-types';
import { PartialType, OmitType, ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class LoginUserDto extends OmitType(CreateUserDto, ['type'] as const)
{

}

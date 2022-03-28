import {
    IsNotEmpty,
    IsString,
    MaxLength
} from 'class-validator'

export class TestDto {
    @IsNotEmpty({ message: 'title不能为空' })
    @MaxLength(10, { message: "最大成都不能大于10位" })
    title: string
}


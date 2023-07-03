import { ApiProperty } from '@nestjs/swagger';
import {
    IsByteLength,
    IsEmail,
    IsEmpty,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsNumberString,
    IsOptional,
    IsPositive,
    IsString,
    Length,
    Max,
    Min,
} from 'class-validator';

export class VerifyTokenDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    token: string;
}

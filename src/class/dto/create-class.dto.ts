import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CreateUserDTO } from 'src/user/dto/create-dto';
import { CreateUserClassDTO } from './create-userClass.dto';

export class CreateClassDto {
  @IsString()
  @ApiProperty({ example: 'A', description: 'Identificador' })
  identifier: string;

  @IsString()
  @ApiProperty({ example: '3° Série', description: 'serie' })
  grade: string;
}

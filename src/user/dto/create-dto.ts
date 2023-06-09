/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Answers, Class, MachineLearning } from '@prisma/client';
import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDTO extends User {
  @ApiProperty({ example: 'haxb3yziw1', description: 'id' })
  @IsOptional()
  id?: string;

  @IsEmail()
  @ApiProperty({ example: 'ana@gmail.com', description: 'email' })
  email: string;

  @IsString()
  @MinLength(5)
  @MaxLength(20)
  @ApiProperty({ example: 'mortadela', description: 'password' })
  hashedPassword: string;

  @IsString()
  @ApiProperty({ example: 'Ana Clara', description: 'name' })
  name: string;

  @IsBoolean()
  @ApiProperty({ example: false, description: 'responsible' })
  responsible: boolean;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: 1,
    description: 'Score according to number of tests',
  })
  score?: number;

  @IsString()
  @ApiProperty({ example: 'A2023.1A.0001', description: 'Registro do aluno' })
  ra: string;

  @IsBoolean()
  @ApiProperty({ example: false, description: 'responsible' })
  firstLogin: boolean;

  @IsOptional()
  Answers?: Answers[];

  @IsOptional()
  Class?: Class[];

  @IsOptional()
  MachineLearning?: MachineLearning[];
}

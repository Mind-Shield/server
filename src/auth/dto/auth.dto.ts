/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class AuthDto {
  @IsString()
  @ApiProperty({ example: 'Ana Clara', description: 'name' })
  name: string;

  @IsBoolean()
  @ApiProperty({ example: false, description: 'Site responsible' })
  responsible?: boolean;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ example: 'ana@gmail.com', description: 'email' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'mortadela', description: 'password' })
  password: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: 1,
    description: 'Score according to number of tests',
  })
  score?: number;

  @IsString()
  @ApiProperty({ example: 'A2023.1A.0001', description: 'Registro do Aluno' })
  ra: string;
}

export class AuthLoginDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ example: 'ana@gmail.com', description: 'email' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'mortadela', description: 'password' })
  password: string;
}

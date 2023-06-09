/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { Answers, Class, MachineLearning } from '@prisma/client';
import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class ProfileUser {
  @ApiProperty({ example: 'haxb3yziw1', description: 'id' })
  @IsOptional()
  id?: string;

  @IsEmail()
  @ApiProperty({ example: 'ana@gmail.com', description: 'email' })
  email: string;

  @IsString()
  @ApiProperty({ example: 'Ana Clara', description: 'name' })
  name: string;

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

  @IsOptional()
  Answers?: Answers[];

  @IsOptional()
  Class?: Class[];

  @IsOptional()
  MachineLearning?: MachineLearning[];
}
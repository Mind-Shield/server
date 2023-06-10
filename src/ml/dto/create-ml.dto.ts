/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class CreateMlDto {
  @IsOptional()
  @ApiProperty({ example: 'Amigos', description: 'typeTest' })
  typeTest: string;

  @IsOptional()
  @ApiProperty({ example: ["Oq vc faria 1", "Oq vc faria 1"], description: 'perguntas' })
  question: string[];

  @IsOptional()
  @ApiProperty({ example: ["jogou que nem o vasco", "melhor filme que eu ja vi"], description: 'respostas' })
  answers: string[];
}
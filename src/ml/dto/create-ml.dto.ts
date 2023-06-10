/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class CreateMlDto {
  @IsOptional()
  @ApiProperty({ example: 'Amigos', description: 'typeTest' })
  typeTest: string;

  @IsOptional()
  @ApiProperty({ example: ["Oq vc faria 1", "Oq vc faria 2", "Oq vc faria 3", "Oq vc faria 4", "Oq vc faria 5"], description: 'perguntas' })
  question: string[];

  @IsOptional()
  @ApiProperty({ example: ["jogou que nem o vasco", "melhor filme que eu ja vi", "eu espancaria ele até ele pedir pinico", "meus pais sempre me recompensam quando vou bem nas aulas", "Eu fiquei tranquila e tentei me acalmar antes de responder ele"], description: 'respostas' })
  answers: string[];
}
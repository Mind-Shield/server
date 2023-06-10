import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTestsDto {
  @IsString()
  @ApiProperty({ example: 'Familia', description: 'type Of Test' })
  typeOfTest: string;

  @IsString()
  @ApiProperty({
    example: 'Se seu amigo te batesse, oq vc faria',
    description: 'question',
  })
  question: string;

  @IsString()
  @ApiProperty({ example: '3° Ano', description: 'grade' })
  grade: string;
}

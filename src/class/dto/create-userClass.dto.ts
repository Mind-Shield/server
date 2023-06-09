/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class CreateUserClassDTO {
  @ApiProperty({ example: 'xansxyas', description: 'User ID' })
  @IsOptional()
  userID: string;

  @IsOptional()
  id: string;

  @ApiProperty({ example: 'xansxyas', description: 'Class ID' })
  @IsOptional()
  classID: string;
}

/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { MLService } from './ml.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { GetCurrentUserId } from '../common/decorators/get-current-user-id.decorator';

@Controller('predict')
export class MLController {
  constructor(private readonly mlService: MLService) {}

  @Post()
  @ApiBearerAuth()
  predict(
  @GetCurrentUserId() userId: string,
  @Body() typeTest: string,
  @Body() question: string[],
  @Body() answers: string[],
  
  ): any {
    const prediction = this.mlService.predict(userId, typeTest, question, answers);
    return { prediction };
  }
}

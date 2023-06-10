/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { MLService } from './ml.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { GetCurrentUserId } from '../common/decorators/get-current-user-id.decorator';
import { CreateMlDto } from './dto/create-ml.dto';

@Controller('predict')
export class MLController {
  constructor(private readonly mlService: MLService) {}

  @Post()
  @ApiBearerAuth()
  predict(
  @GetCurrentUserId() userId: string,
  @Body() dto: CreateMlDto
  ): any {
    const prediction = this.mlService.predict(userId, dto);
    return prediction;
  }
}

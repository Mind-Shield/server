/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { MLService } from './ml.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { GetCurrentUserId } from '../common/decorators/get-current-user-id.decorator';
import { CreateMlDto } from './dto/create-ml.dto';

@Controller('predict')
export class MLController {
  constructor(private readonly mlService: MLService) {}

  @Get()
  @ApiBearerAuth()
  async getAllMl() {
    return this.mlService.getAllMl();
  }

  @Get('/:Mlid')
  @ApiBearerAuth()
  async findOneMl(@Param('Mlid') Mlid: string): Promise<any> {
    return this.mlService.findOneMl(Mlid);
  }

  @Get('/:userId')
  @ApiBearerAuth()
  async findMlByUser(@Param('userId') userId: string): Promise<any> {
    return this.mlService.findMlByUser(userId);
  }

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

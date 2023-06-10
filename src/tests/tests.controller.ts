/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  Param,
  HttpStatus,
} from '@nestjs/common';
import { TestsService } from './tests.service';
import { CreateTestsDto } from './dto/create-tests.dto';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { GetCurrentUser, GetCurrentUserId, Public } from '../common/decorators';

@Controller('tests')
export class TestsController {
  constructor(
    private readonly testsService: TestsService,
  ) {}

  @Get()
  @ApiBearerAuth()
  async getAllTests() {
    return this.testsService.getAllTests();
  }

  @Public()
  @Post('create')
  @ApiResponse({
    status: 200,
    description: 'Everything works as expected',
    type: CreateTestsDto,
  })
  @ApiResponse({
    status: 403,
    description: 'Forbbiden',
  })
  @HttpCode(HttpStatus.CREATED)
  testsCreate(@Body() dto: CreateTestsDto): Promise<any> {
    return this.testsService.testsCreate(dto);
  }
}

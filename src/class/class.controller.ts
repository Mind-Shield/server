/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';
import { CreateUserClassDTO } from './dto/create-userClass.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { GetCurrentUser, GetCurrentUserId, Public } from '../common/decorators';

@Controller('class')
export class ClassController {
  constructor(
    private readonly classService: ClassService,
  ) {}


  @Get()
  @ApiBearerAuth()
  async getAllClass() {
    return this.classService.getAllClass();
  }

  @Get('/:classId')
  @ApiBearerAuth()
  async findOneClass(@Param('classId') classId: string): Promise<any> {
    return this.classService.findOneClass(classId);
  }

  @Get('/alunos/:classId')
  @ApiBearerAuth()
  async findAllStudentsClass(@Param('classId') classId: string): Promise<any> {
    return this.classService.findAllStudentsClass(classId);
  }

  @Public()
  @Post('create')
  @ApiResponse({
    status: 200,
    description: 'Everything works as expected',
    type: CreateClassDto,
  })
  @ApiResponse({
    status: 403,
    description: 'Forbbiden',
  })
  @HttpCode(HttpStatus.CREATED)
  classCreate(@Body() dto: CreateClassDto): Promise<any> {
    return this.classService.classCreate(dto);
  }

  @Public()
  @Post('/aluno/create')
  @ApiResponse({
    status: 200,
    description: 'Everything works as expected',
    type: CreateUserClassDTO,
  })
  @ApiResponse({
    status: 403,
    description: 'Forbbiden',
  })
  @HttpCode(HttpStatus.CREATED)
  classUserCreate(@Body() dto: CreateUserClassDTO): Promise<any> {
    return this.classService.classUserCreate(dto);
  }
}

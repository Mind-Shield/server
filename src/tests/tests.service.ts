/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTestsDto } from './dto/create-tests.dto';

@Injectable()
export class TestsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllTests() {
    const getTests = await this.prisma.tests.findMany({
      select: {
        id: true,
        typeOfTest: true,
        question: true,
        grade: true,
      },
    });
    return getTests;
  }

  async testsCreate(dto: CreateTestsDto): Promise<any> {
    const createClass = await this.prisma.tests.create({
      data: {
        typeOfTest: dto.typeOfTest,
        question: dto.question,
        grade: dto.grade,
      },
    })

    return createClass;
  }
}

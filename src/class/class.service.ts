/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClassDto } from './dto/create-class.dto';
import { CreateUserClassDTO } from './dto/create-userClass.dto';

@Injectable()
export class ClassService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllClass() {
    const getClass = await this.prisma.class.findMany({
      select: {
        id: true,
        identifier: true,
        grade: true,
        UserClass: { select: { id: true, userID: true, classID: true } },
      },
    });
    return getClass;
  }

  async findOneClass(classId: string) {
    const getClass = await this.prisma.class.findMany({
      where: { id: classId },
      select: {
        id: true,
        identifier: true,
        grade: true,
        UserClass: { select: { id: true, userID: true, classID: true } },
      },
    });
    return getClass;
  }

  async findAllStudentsClass(classId: string) {
    const getStudentsClass = await this.prisma.userClass.findMany({
      where: { classID: classId },
      select: {
        id: true,
        userID: true,
        classID: true,
      },
    });
    return getStudentsClass;
  }

  async classCreate(dto: CreateClassDto): Promise<any> {
    const createClass = await this.prisma.class.create({
      data: {
        identifier: dto.identifier,
        grade: dto.grade,
      },
    })

    return createClass;
  }

  async classUserCreate(dto: CreateUserClassDTO): Promise<any> {
    const createUserClass = await this.prisma.userClass.create({
      data: {
        userID: dto.userID,
        classID: dto.classID,
      },
    })

    return createUserClass;
  }
}

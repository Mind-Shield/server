/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ProfileUser } from './dto/pick-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async getAllUsers() {
    const users = await this.prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        name: true,
        responsible: true,
        email: true,
        score: true,
        ra: true,
        Answers: { select: { id: true } },
        Class: { select: { id: true } },
        MachineLearning: { select: { id: true } },
      },
    });
    return users;
  }

  async findOne(userId: string): Promise<ProfileUser> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        responsible: true,
        email: true,
        score: true,
        ra: true,
        // Answers: { select: { id: true } },
        // Class: { select: { id: true } },
        // MachineLearning: { select: { id: true } },
      },
    });
    return user;
  }

  async findByEmail(email: string): Promise<ProfileUser> {
    const user = await this.prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        responsible: true,
        email: true,
        score: true,
        ra: true,
        // Answers: { select: { id: true } },
        // Class: { select: { id: true } },
        // MachineLearning: { select: { id: true } },
      },
    });
    return user;
  }

  async getResponsibleUsers(): Promise<ProfileUser[]> {
    const responsibleUsers = this.prisma.user.findMany({
      where: { responsible: true },
      select: {
        id: true,
        name: true,
        responsible: true,
        email: true,
        score: true,
        ra: true,
        // Answers: { select: { id: true } },
        // Class: { select: { id: true } },
        // MachineLearning: { select: { id: true } },
      },
    });
    return responsibleUsers;
  }

  async deleteUser(id: string): Promise<User> {
    const findUser = await this.prisma.user.findUnique({ where: { id } });

    if (!findUser) {
      throw new Error('User does not exist');
    }

    const deletedUser = await this.prisma.user.delete({ where: { id } });

    return deletedUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return;
  }
}

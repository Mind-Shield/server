/* eslint-disable prettier/prettier */
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { CaslAbilityFactory } from '../casl/casl-ability.factory/casl-ability.factory';
import { Action } from '../casl/enums/role.enum';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private abilityFactory: CaslAbilityFactory,
    private prisma: PrismaService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const user = req.user;

    const { email } = user; // Extract the necessary properties from req.user

    const responsible = await this.prisma.user
      .findUnique({
        where: { email },
        select: { responsible: true },
      })
      .then((user) => user?.responsible ?? false); // If user is null, default to false
  
    if (!responsible) {
      throw new ForbiddenException('Only admin users can access this endpoint. Permission denied!');
    }
  
    // Create a dummy User object with the admin property
    const dummyUser: User = {
        responsible,
        email: '',
        hashedPassword: '',
        name: '',
        ra: '',
        firstLogin: false
    };
  
    // Create the ability instance for the user
    const ability = this.abilityFactory.createForUser(dummyUser);
  
    // Check if the user has admin permissions
    const isAllowed = ability.can(Action.Manage, 'all');
  
    // Return true if the user is an admin, otherwise false
    return isAllowed;
  }
}

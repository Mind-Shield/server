/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminGuard } from '../guards/admin.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { CaslAbilityFactory } from '../casl/casl-ability.factory/casl-ability.factory';
import { ProfileUser } from './dto/pick-user.dto';
import { GetCurrentUserId } from '../common/decorators/get-current-user-id.decorator';
import { Profile } from 'passport';

@ApiTags('user')
@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private abilityFactory: CaslAbilityFactory,
  ) {}

  @Get()
  @ApiBearerAuth()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get('/profile/:userId')
  @ApiBearerAuth()
  async findOne(@Param('userId') userId: string): Promise<ProfileUser> {
    return this.userService.findOne(userId);
  }

  @Get('/profile/:email')
  @ApiBearerAuth()
  async findByEmail(@Param('email') email: string): Promise<ProfileUser> {
    return this.userService.findByEmail(email);
  }

  @Get('responsible')
  @UseGuards(AdminGuard)
  @ApiBearerAuth()
  async getResponsible(): Promise<ProfileUser[]> {
    return this.userService.getResponsibleUsers();
  }

  @Delete('/delete/:id')
  @UseGuards(AdminGuard)
  @ApiBearerAuth()
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.userService.deleteUser(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  async update(
    @Param('id') id: string,
    @Body() newData: string,
  ): Promise<User> {
    return await this.userService.update(id, newData);
  }
}

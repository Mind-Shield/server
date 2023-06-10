/* eslint-disable prettier/prettier */
import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { AtGuard } from './common/guards';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ClassModule } from './class/class.module';
import { MLModule } from './ml/ml.module';
import { TestsModule } from './tests/tests.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UserModule,
    ClassModule,
    MLModule,
    TestsModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  providers: [{ provide: APP_GUARD, useClass: AtGuard }],
})
export class AppModule {}

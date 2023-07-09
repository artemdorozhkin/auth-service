import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AtStrategy, RtStrategy } from './strategies';
import { RedisModule } from 'src/redis/redis.module';

@Module({
    imports: [JwtModule.register({}), RedisModule],
    controllers: [AuthController],
    providers: [AuthService, AtStrategy, RtStrategy],
})
export class AuthModule { }
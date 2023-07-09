import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager'
import { ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-yet';
import { RedisService } from './redis.service';

@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        store: await redisStore({
          url: configService.get<string>('REDIS_URL'),
        }),
      }),
      isGlobal: true,
      inject: [ConfigService],
    })
  ],
  providers: [RedisService],
  exports: [RedisService]
})
export class RedisModule { }
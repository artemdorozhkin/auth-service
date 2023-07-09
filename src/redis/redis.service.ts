import { Global, Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Cache } from 'cache-manager';

@Global()
@Injectable()
export class RedisService {
    constructor(@Inject(CACHE_MANAGER) private cache: Cache) { }

    async get(key: string): Promise<string> {
        const value: string | undefined = await this.cache.get(key);
        if (!value) return ''
        return value
    }

    async set(key: string, value: string, ttl?: number) {
        if (ttl) {
            return await this.cache.set(key, value, ttl);
        }
        return await this.cache.set(key, value);
    }

    async del(key: string) {
        return await this.cache.del(key);
    }
}

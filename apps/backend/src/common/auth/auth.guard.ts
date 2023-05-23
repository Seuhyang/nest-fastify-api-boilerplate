import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { ExecutionContext, CanActivate } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { FastifyRequest } from 'fastify';
@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);
    private readonly JWT_SECRET_KEYS: string;

    constructor(private configService: ConfigService, private jwtService: JwtService, private reflector: Reflector) {
        this.JWT_SECRET_KEYS = this.configService.get<string>('jwt_secret_key');
    }

    async activated(context: ExecutionContext): Promise<boolean> {
        const isPublic = this.reflector.getAllAndOverride('isPublic', [context.getHandler(), context.getClass()]);

        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) throw new UnauthorizedException();

        const payload = this.jwtService.verifyAsync(token, {
            secret: this.JWT_SECRET_KEYS,
        });
        this.logger.debug(payload);

        return true;
    }

    private extractTokenFromHeader(request: FastifyRequest) {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}

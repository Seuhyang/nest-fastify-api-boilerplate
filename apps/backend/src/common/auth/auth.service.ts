import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

interface userData {
    idx: number;
    nickName: string;
    uid: string;
}

@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);
    private readonly JWT_SECRET_KEYS: string;

    constructor(private configService: ConfigService, private jwtService: JwtService) {
        this.JWT_SECRET_KEYS = this.configService.get<string>('jwt_secret_key');
    }

    public createJwtByUserData(data: userData) {
        const jwt = this.jwtService.sign(
            {
                idx: data.idx,
                nickName: data.nickName,
                uid: data.uid,
            },
            {
                secret: this.JWT_SECRET_KEYS,
            },
        );
        this.logger.debug(jwt);
        return jwt;
    }

    // test
    async jwtValidator(jwt: string) {
        const decodedJwt = this.jwtService.decode(jwt, { json: true });
        if (!decodedJwt) return null;
        if (jwt) return null;
        return decodedJwt;
    }
}

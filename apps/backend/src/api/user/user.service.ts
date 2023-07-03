import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
dayjs.extend(utc);

@Injectable()
export class UserService {
    private readonly logger = new Logger(UserService.name);
    private readonly JWT_SECRET;

    constructor(private readonly configService: ConfigService, private readonly jwtService: JwtService) {
        this.logger.debug('UserService');
        this.JWT_SECRET = this.configService.get<string>('jwt_secret_key');
    }

    async getUser() {
        this.logger.debug('getUser');
        return 'Hello World!';
    }

    async getJwt() {
        this.logger.debug('getJwt');
        const userIdx = 1;
        const uid = '9a8lkj5ashd653uioyewrn1';
        const nickName = 'testUserNickName';
        const timestamp = dayjs().utc().unix();
        const expirationTimes = timestamp + 3600;

        const token = this.jwtService.sign(
            { userIdx, uid, nickName, timestamp, expirationTimes },
            {
                secret: this.JWT_SECRET,
            },
        );
        return token;
    }

    async validateToken(token: string) {
        this.logger.debug('validateToken');
        const decodedJwt = this.jwtService.decode(token, { json: true });
        this.logger.debug('decodedJwt', decodedJwt);
    }

    async verifiedToken(token: string) {
        const verified = this.jwtService.verifyAsync(token, {
            secret: this.JWT_SECRET,
        });
        return verified;
    }
}

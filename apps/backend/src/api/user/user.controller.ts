import { Controller, Get, Logger, Param, Query, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { VerifyTokenDto } from './user.request.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
    private readonly logger = new Logger(UserController.name);

    constructor(private readonly userService: UserService) {}

    @Get()
    async getUser(@Request() req) {
        const result = await this.userService.getUser();
        return result;
    }

    @Get('/jwt')
    async getJwt(@Request() req) {
        const result = await this.userService.getJwt();
        return result;
    }
    @Get('/jwt/verify')
    async getVerifiedToken(@Request() req, @Query() verifyTokenDto: VerifyTokenDto) {
        const token = verifyTokenDto.token;
        const result = await this.userService.verifiedToken(token);
        return result;
    }
}

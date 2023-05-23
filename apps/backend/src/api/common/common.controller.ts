import { Controller, UseGuards, UseInterceptors } from '@nestjs/common';

// @UseGuards()
@UseInterceptors()
@Controller('common')
export class CommonController {}

import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';

import { IUserService } from '../../../domain/interfaces/services/user.service.interface';
import { ServiceProxyEnum } from '../../../service-proxy/enums/service.enum';
import { ServiceProxy } from '../../../service-proxy/service-proxy';
import { CreateUserDto } from '../../../shared/dto/users/create-user.dto';

@Controller('users')
export class UserController {
  constructor(
    @Inject(ServiceProxyEnum.USER_SERVICE_PROXY)
    private readonly service: ServiceProxy<IUserService>,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    return await this.service.getInstance().findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() user: CreateUserDto) {
    return await this.service.getInstance().create(user);
  }
}

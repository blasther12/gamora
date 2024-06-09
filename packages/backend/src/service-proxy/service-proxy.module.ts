import { DynamicModule, Module } from '@nestjs/common';

import { ServiceProxyEnum } from './enums/service.enum';
import { ServiceProxy } from './service-proxy';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { RegisterRepository } from '../infrastructure/repositories/register.repository';
import { UsersRepository } from '../infrastructure/repositories/user.repository';
import { CreateService } from '../service/user.service';

@Module({
  imports: [InfrastructureModule],
})
export class UseCasesProxyModule {
  static register(): DynamicModule {
    return {
      module: UseCasesProxyModule,
      providers: [
        {
          inject: [UsersRepository, RegisterRepository],
          provide: ServiceProxyEnum.USER_SERVICE_PROXY,
          useFactory: (
            userRepository: UsersRepository,
            registerRepository: RegisterRepository,
          ) =>
            new ServiceProxy(
              new CreateService(userRepository, registerRepository),
            ),
        },
      ],
      exports: [ServiceProxyEnum.USER_SERVICE_PROXY],
    };
  }
}

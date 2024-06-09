import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import typeorm from './config/typeorm.config';
import { RegisterRepository } from './repositories/register.repository';
import { UsersRepository } from './repositories/user.repository';
import { RegisterEntity } from '../domain/entities/register.entity';
import { UserEntity } from '../domain/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (
        configService: ConfigService,
      ): Promise<TypeOrmModuleOptions> => {
        const typeOrmConfig =
          configService.get<TypeOrmModuleOptions>('typeorm');
        if (!typeOrmConfig) {
          throw new Error('TypeORM configuration is not defined');
        }
        return typeOrmConfig;
      },
    }),
    TypeOrmModule.forFeature([UserEntity, RegisterEntity]),
  ],
  providers: [UsersRepository, RegisterRepository],
  exports: [UsersRepository, RegisterRepository],
})
export class InfrastructureModule {}

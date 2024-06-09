import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

import { HealthController } from './controllers/health/health.controller';
import { UserController } from './controllers/user/users.controller';
import { UseCasesProxyModule } from '../service-proxy/service-proxy.module';

@Module({
  imports: [TerminusModule, HttpModule, UseCasesProxyModule.register()],
  controllers: [HealthController, UserController],
})
export class ApplicationModule {}

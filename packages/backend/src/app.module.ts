import { Module } from '@nestjs/common';

import { ApplicationModule } from './application/application.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { UseCasesProxyModule } from './service-proxy/service-proxy.module';

@Module({
  imports: [
    ApplicationModule,
    InfrastructureModule,
    UseCasesProxyModule.register(),
  ],
})
export class AppModule {}

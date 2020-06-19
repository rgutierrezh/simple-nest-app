import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProxyController } from './controller/proxy/proxy.controller';
import { CompanyService } from './service/company/company.service';

@Module({
  imports: [],
  controllers: [AppController, ProxyController],
  providers: [AppService, CompanyService],
})
export class AppModule {}

import { Controller, Get, Param } from '@nestjs/common';
import { CompanyService } from '../../service/company/company.service';

@Controller('proxy')
export class ProxyController {
  constructor(private companyService: CompanyService){}

  @Get()
  proxy(): any{
    return {message: 'proxy reached!'}
  }

  @Get('companies/:account')
  retrieveAllCompanies(@Param() params): any{
    return this.companyService.getAllCompaniesByAccount(params.account);
  }

}

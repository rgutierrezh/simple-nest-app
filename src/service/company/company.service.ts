import { Injectable } from '@nestjs/common';

@Injectable()
export class CompanyService {

  getAllCompaniesByAccount(account:string): any {
      return{message: 'should retrieve from hubspot all companies from ' +  account + ' account.'}
  }
}

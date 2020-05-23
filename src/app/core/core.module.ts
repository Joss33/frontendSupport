import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientService } from './services/client/client.service';
import { SupportService } from './services/support/support.service';
import { LoginService } from './services/login/login.service';
import { TokenInterceptorService } from './services/token-interceptor/token-interceptor.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    ClientService,
    SupportService,
    LoginService,
    TokenInterceptorService,
  ],
})
export class CoreModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './components/login/login.component';
import { LoginService } from './../core/services/login/login.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, RouterModule, FormsModule],
})
export class LoginModule {}

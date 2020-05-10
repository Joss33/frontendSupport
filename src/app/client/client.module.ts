import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ClientRoutingModule } from './client-routing.module';

// Components
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientListComponent } from './components/client-list/client-list.component';
// Pipes
import { SharedModule } from './../shared/shared.module';
import { ClientService } from '../core/services/client/client.service';

@NgModule({
  declarations: [ClientFormComponent, ClientListComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    SharedModule,
    RouterModule,
  ],
})
export class ClientModule {}

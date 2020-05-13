import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SupportRoutingModule } from './support-routing.module';

import { SupportFormComponent } from './components/support-form/support-form.component';
import { SupportListComponent } from './components/support-list/support-list.component';

import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [SupportFormComponent, SupportListComponent],
  imports: [
    CommonModule,
    SupportRoutingModule,
    FormsModule,
    RouterModule,
    SharedModule,
  ],
  exports: [SupportListComponent],
})
export class SupportModule {}

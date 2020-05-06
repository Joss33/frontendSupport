import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { SupportFormComponent } from './components/support-form/support-form.component';
import { SupportListComponent } from './components/support-list/support-list.component';


@NgModule({
  declarations: [SupportFormComponent, SupportListComponent],
  imports: [
    CommonModule,
    SupportRoutingModule
  ]
})
export class SupportModule { }

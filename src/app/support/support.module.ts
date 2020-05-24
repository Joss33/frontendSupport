import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SupportRoutingModule } from './support-routing.module';

import { SupportFormComponent } from './components/support-form/support-form.component';
import { SupportListComponent } from './components/support-list/support-list.component';
import { SupportExportComponent } from './components/support-export/support-export.component';

import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    SupportFormComponent,
    SupportListComponent,
    SupportExportComponent,
  ],
  imports: [
    CommonModule,
    SupportRoutingModule,
    FormsModule,
    RouterModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [SupportListComponent],
})
export class SupportModule {}

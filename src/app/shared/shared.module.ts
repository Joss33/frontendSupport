import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { NavButtonComponent } from './components/nav-button/nav-button.component';
// Pipes
import { FilterPipe } from './pipe/filter/filter.pipe';
import { FilterSupportPipe } from './pipe/filter/filter-support.pipe';

import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [NavButtonComponent, FilterPipe, FilterSupportPipe],
  imports: [CommonModule, RouterModule, MaterialModule],
  providers: [],
  exports: [NavButtonComponent, FilterPipe, FilterSupportPipe, MaterialModule],
})
export class SharedModule {}

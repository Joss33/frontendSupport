import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { FilterPipe } from './pipe/filter/filter.pipe';
import { FilterSupportPipe } from './pipe/filter/filter-support.pipe';

@NgModule({
  declarations: [NavButtonComponent, FilterPipe, FilterSupportPipe],
  imports: [CommonModule, RouterModule],
  exports: [NavButtonComponent, FilterPipe, FilterSupportPipe],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { FilterPipe } from './pipe/filter/filter.pipe';

@NgModule({
  declarations: [NavButtonComponent, FilterPipe],
  imports: [CommonModule],
  exports: [NavButtonComponent, FilterPipe],
})
export class SharedModule {}

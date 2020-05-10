import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { FilterPipe } from './pipe/filter/filter.pipe';

@NgModule({
  declarations: [NavButtonComponent, FilterPipe],
  imports: [CommonModule, RouterModule],
  exports: [NavButtonComponent, FilterPipe],
})
export class SharedModule {}

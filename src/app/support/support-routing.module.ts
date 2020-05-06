import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { SupportFormComponent } from './components/support-form/support-form.component';
import { SupportListComponent } from './components/support-list/support-list.component';

const routes: Routes = [
  {
    path: '',
    component: SupportListComponent,
  },
  {
    path: 'edit',
    component: SupportFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportRoutingModule {}

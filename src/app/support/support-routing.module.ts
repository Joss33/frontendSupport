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
    path: 'support/create/:clientID',
    component: SupportFormComponent,
  },
  {
    path: 'support/update/:id',
    component: SupportFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportRoutingModule {}

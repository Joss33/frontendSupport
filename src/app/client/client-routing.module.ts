import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientListComponent } from './components/client-list/client-list.component';

const routes: Routes = [
  {
    path: '',
    component: ClientListComponent,
  },
  {
    path: 'client',
    component: ClientFormComponent,
  },
  {
    path: 'client/edit/:id',
    component: ClientFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}

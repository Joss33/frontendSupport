import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientListComponent } from './components/client-list/client-list.component';

// Guards
import { AuthGuard } from './../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ClientListComponent,
  },
  {
    path: 'client',
    canActivate: [AuthGuard],
    component: ClientFormComponent,
  },
  {
    path: 'client/edit/:id',
    canActivate: [AuthGuard],
    component: ClientFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}

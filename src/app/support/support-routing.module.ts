import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { SupportFormComponent } from './components/support-form/support-form.component';
import { SupportListComponent } from './components/support-list/support-list.component';
import { SupportExportComponent } from './components/support-export/support-export.component';

// Guards
import { AuthGuard } from './../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SupportListComponent,
  },
  {
    path: 'support/create/:clientID',
    canActivate: [AuthGuard],
    component: SupportFormComponent,
  },
  {
    path: 'support/update/:id/:clientID',
    canActivate: [AuthGuard],
    component: SupportFormComponent,
  },
  {
    path: 'support/supportExportToExcel',
    canActivate: [AuthGuard],
    component: SupportExportComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportRoutingModule {}

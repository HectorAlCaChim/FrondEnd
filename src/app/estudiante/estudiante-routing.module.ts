import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudianteComponent } from './estudiante.component';
import { EstudianteListComponent } from './estudiante-list/estudiante-list.component';
import { AuthGuard } from '../auth/auth.guard';
import { Role } from '../auth/role.enum';

const routes: Routes = [
  { path: '',
    children: [{
        path: '',
        component: EstudianteListComponent
      }],
      canActivate: [AuthGuard],
      data: {expectedRole: Role.Admin}
  }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }

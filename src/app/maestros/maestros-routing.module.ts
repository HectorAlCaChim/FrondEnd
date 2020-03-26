import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaestrosComponent } from './maestros.component';
import { MaestroListComponent } from './maestro-list/maestro-list.component';

const routes: Routes = [
  { path: '', // component: MaestrosComponent
    children: [{
      path: '',
      component: MaestroListComponent
    }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaestrosRoutingModule { }

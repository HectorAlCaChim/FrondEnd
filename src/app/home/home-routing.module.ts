import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, // COMPONENTE PADRE
    children: [ // AQUI SE PONEN LOS COMPONENTES HIJOS "RUTAS"
      {
        path: 'home',
        component: HomeComponent, // se va al componente
      }
    ]
  }
  // {path: '**', component: AppComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

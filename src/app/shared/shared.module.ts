import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TableViewComponent } from './table-view/table-view.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavBarComponent, NotFoundComponent, TableViewComponent],
  imports: [
    CommonModule,
    RouterModule,
    Ng2SearchPipeModule,
    OrderModule, // importing the sorting package here
    NgxPaginationModule,
    FormsModule, // aqui se importa la libreria con los modulos
  ],
  exports: [ // Se utiliza para que este componente sea global asi como para que sea utilizado
    NavBarComponent, NotFoundComponent, TableViewComponent // Aqui el nombre del componente
  ]
})
export class SharedModule { }

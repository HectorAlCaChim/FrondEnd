import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaestrosRoutingModule } from './maestros-routing.module';
import { MaestrosComponent } from './maestros.component';
import { MaestroListComponent } from './maestro-list/maestro-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MaestrosComponent, MaestroListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule, // SE AGREGAN LOS REACTIVES FORM
    FormsModule,
    MaestrosRoutingModule,
    Ng2SearchPipeModule,
    OrderModule, // importing the sorting package here
    NgxPaginationModule,
    SharedModule
  ]
})
export class MaestrosModule { }

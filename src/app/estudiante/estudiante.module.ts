import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import { EstudianteComponent } from './estudiante.component';
import { EstudianteListComponent } from './estudiante-list/estudiante-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NewEstudianteComponent } from './new-estudiante/new-estudiante.component';
import { NgbModule, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [EstudianteComponent, EstudianteListComponent, NewEstudianteComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule, // SE AGREGAN LOS REACTIVES FORM
    FormsModule,
    EstudianteRoutingModule,
    Ng2SearchPipeModule,
    OrderModule, // importing the sorting package here
    NgxPaginationModule,
    SharedModule,
  ]
})
export class EstudianteModule { }

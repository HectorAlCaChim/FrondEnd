import { Component, OnInit } from '@angular/core';
import { MaestrosModel } from 'src/app/models/Maestros.model';
import { MaestrosService } from 'src/app/services/maestros.service';

@Component({
  selector: 'app-maestro-list',
  templateUrl: './maestro-list.component.html',
  styleUrls: ['./maestro-list.component.scss']
})
export class MaestroListComponent implements OnInit {

  headers = ['rfc', 'nombres', 'apellidos', 'email'];
  maestros: Array<MaestrosModel>;
  constructor(private maestrosService: MaestrosService) {
    this.maestros = new Array<MaestrosModel>();
   }

  public loadMaestros() {
    console.log( 'entro al metodo' );
    this.maestrosService.getAll()
    .subscribe(info => {
      console.log(info);
      this.maestros = info;
    });
  }

  procesaPropagar(mensaje) {
    console.log(mensaje);
  }
  ngOnInit(): void {
    this.loadMaestros();
  }
}

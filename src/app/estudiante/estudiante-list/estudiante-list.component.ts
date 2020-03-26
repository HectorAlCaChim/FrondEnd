import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from 'src/app/services/estudiante.service';
import { EstudiantesResponse } from 'src/app/models/estudiantesResponse.models';
import { EstudianteModel } from 'src/app/models/estudiantes.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NewEstudianteComponent } from '../new-estudiante/new-estudiante.component';

@Component({
  selector: 'app-estudiante-list',
  templateUrl: './estudiante-list.component.html',
  styleUrls: ['./estudiante-list.component.scss']
})
export class EstudianteListComponent implements OnInit {

  result = false;
  title = 'app works!';
  headers = ['idEstudiantes', 'nombre', 'apellido1', 'apellido2', 'edad', 'genero'];
  estudiantes: Array<EstudianteModel>;
  constructor(private estudianteService: EstudiantesService, private modalService: NgbModal) {
    this.estudiantes = new Array<EstudianteModel>();
    this.result = false;
   }
  openVideoPopup() {
    this.modalService.open(NewEstudianteComponent);
  }
//sorting
  // tslint:disable-next-line: member-ordering
  key: string = 'idEstudiantes';
  // tslint:disable-next-line: member-ordering
  reverse: boolean = false;
  p: number = 1;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  public loadEstudiantes() {
    console.log( 'entro al metodo' );
    this.estudianteService.getAll()
    .subscribe(info => {
      console.log(info);
      this.estudiantes = info;
    });
  }
  ngOnInit() {
    this.loadEstudiantes();
    this.recargar();
  }

  public recargar() {
    this.result = this.modalService.hasOpenModals();
    console.log(this.result);
  }

}
/*games = [
    {
      "id": "1",
      "name": "DOTA 2",
      "genre": "Strategy"
    },
    {
      "id":"2",
      "name": "AOE 3",
      "genre": "Strategy"
    },
    {
      "id":"3",
      "name": "GTA 5",
      "genre": "RPG"
    },
    {
      "id":"4",
      "name": "Far Cry 3",
      "genre": "Action"
    },
    {
      "id":"5",
      "name": "GTA San Andreas",
      "genre": "RPG"
    },
    {
      "id":"6",
      "name": "Hitman",
      "genre": "Action"
    },
    {
      "id":"7",
      "name": "NFS MW",
      "genre": "Sport"
    },{
      "id":"8",
      "name": "Fifa 16",
      "genre": "Sport"
    },{
      "id":"9",
      "name": "NFS Sen 2",
      "genre": "Sport"
    },{
      "id":"10",
      "name": "Witcher Assasins on King",
      "genre": "Adventure"
    }
  ];*/

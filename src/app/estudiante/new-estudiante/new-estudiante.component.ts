import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { EstudiantesService } from 'src/app/services/estudiante.service';
import { EstudianteModel, EstudianteInsertModel } from 'src/app/models/estudiantes.model';

@Component({
  selector: 'app-new-estudiante',
  templateUrl: './new-estudiante.component.html',
  styleUrls: ['./new-estudiante.component.scss']
})
export class NewEstudianteComponent implements OnInit {

  submit = false;
  nuevoEstudiante: FormGroup;
  estudiante: EstudianteInsertModel = {
    nombre : '',
    apellido1: '',
    apellido2: '',
    edad: 0,
    genero: ''
  };

  // tslint:disable-next-line: max-line-length
  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal, private fb: FormBuilder, private estudinatesService: EstudiantesService) {}
  ngOnInit() {
    this.buldingEstudianteForm();
  }
  buldingEstudianteForm(): void {
    this.nuevoEstudiante = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido1: new FormControl('', [Validators.required]),
      apellido2: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required])
    });
  }

  onSubmit(nuevoEstudiante: FormGroup): void {
    this.submit = true;
    console.log(nuevoEstudiante);
    const e = Object.assign({}, this.nuevoEstudiante.value);
    let model: EstudianteInsertModel = Object.assign(nuevoEstudiante.value);
    this.estudinatesService.insert(model).subscribe(x =>
      {
      });
  }
  private clearForm() {
    this.nuevoEstudiante.patchValue({
      nombre: null,
      apellido1: null,
      apellido2: null,
      edad: null
    });
    this.nuevoEstudiante.clearValidators();
    this.submit = false;
  }
  public close() {
    this.modalService.dismissAll();
    return true;
  }
}

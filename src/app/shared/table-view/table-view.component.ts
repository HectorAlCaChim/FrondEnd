import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EstudianteListComponent } from 'src/app/estudiante/estudiante-list/estudiante-list.component';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  @Input() columns: object[] = [];
  @Input() items = new Array<any>();
  @Input() term: string ;
  @Output() propagar = new EventEmitter<string>();
  constructor() { }

  key: string = 'idEstudiantes';
  reverse: boolean = false;
  p: number = 1;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  ngOnInit() {
  }
  public imprimir(items= new Array<any>()) {
    console.log(this.items);
    let cont = 0;
    // tslint:disable-next-line: forin
    for (const key in items) {
      cont = cont + 1;
      if (items.hasOwnProperty(key)) {
        if (cont === 1) {
          console.log(items[key]);
          var removeItem = items[key];
          // tslint:disable-next-line: only-arrow-functions
          var removeIndex = this.items.map(function(item) { return item[key]; }).indexOf(removeItem);
        }
      }
    }
    this.items.splice(removeIndex, 1);
    console.log(this.items);
    this.propagar.emit(removeItem);
  }

}

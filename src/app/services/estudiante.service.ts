import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstudiantesResponse } from '../models/estudiantesResponse.models';
import { EstudianteModel, EstudianteInsertModel } from '../models/estudiantes.model';

@Injectable({
    providedIn: 'root'
})
export class EstudiantesService {
    [x: string]: any;
    urlApiI = 'Estudiantes/Agregar';
    urlApiD = 'Estudiantes/Eliminar?estudianteId';
    urlApi = 'Estudiantes/VerTodos';

    private httpOptions: any;

    constructor(private http: HttpClient) {
    }

    public getAll(): Observable<any> {
        return this.http.get<EstudiantesResponse>(this.urlApi);
    }

    public insert(estudiante: EstudianteInsertModel): Observable<any> {
        return this.http.post<EstudianteModel>(this.urlApiI, estudiante);
    }

    public delete(id: number): Observable<any> {
        const url = `${this.urlApiD}=${id}`; // DELETE api/heroes/42
        return this.http.delete(url, {responseType: 'text'});
    }
    /*updateHero (hero: Hero): Observable<Hero> {
        return this.http.put<Hero>(this.heroesUrl, hero, httpOptions)
          .pipe(
            catchError(this.handleError('updateHero', hero))
          );
      }*/
}

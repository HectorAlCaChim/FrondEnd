import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MaestrosModel } from '../models/Maestros.model';
@Injectable({
    providedIn: 'root'
})
export class MaestrosService {
    urlApi = 'Maestros/todos';
    private httpOptions: any;

    constructor(private http: HttpClient) {
    }

    public getAll(): Observable<any> {
        return this.http.get<MaestrosModel>(this.urlApi);
    }
}

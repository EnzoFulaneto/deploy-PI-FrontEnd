import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CategoriaModel } from '../model/CategoriaModel';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllCategoria(): Observable<CategoriaModel[]>{
    return this.http.get<CategoriaModel[]>('https://anjosdopreco.herokuapp.com/categorias', this.token)
  }

  getByIdCategoria(id: number): Observable<CategoriaModel>{
    return this.http.get<CategoriaModel>(`https://anjosdopreco.herokuapp.com/categorias/${id}`, this.token)
  }

  postCategoria(categoria: CategoriaModel): Observable<CategoriaModel>{
    return this.http.post<CategoriaModel>('https://anjosdopreco.herokuapp.com/categorias', categoria, this.token)
  }
}

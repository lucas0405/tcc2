import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IUsuarioTela } from '../model/IUsuarioTela.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URL: string = 'http://DB-DS-PHILOTESAPP.somee.com/api/Pets'

  constructor(private http: HttpClient) { }

  telaUsuario(): Observable<IUsuarioTela[]> {

    return this.http.get<IUsuarioTela[]>(this.URL);

  }
}




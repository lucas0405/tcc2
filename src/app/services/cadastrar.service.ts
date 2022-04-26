import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastrarService {
  private URL: string = 'http://DB-DS-PHILOTESAPP.somee.com/api/Pets'

  constructor() {}

  cadastroMetodo(){
    return this.http.get(this.URL);

  }

}

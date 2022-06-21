import { Usuario } from 'src/app/model/IUsuario.model';
import { Constants } from './../../../../../main';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/model/IPets.model';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent implements OnInit {

  @Input() pet!: Pet
  @Input() user!: Usuario

  constructor(private service: UsuarioService,  private router: Router) { }

  ngOnInit(): void {}


  isLoggedIn(): Boolean {
    return this.service.isLoggedIn()
  }

  logout() {
    this.service.logout()
    this.router.navigate(["./"])
  }

  userName(): String | null {
    var userName = this.service.loggedUser()?.nome
    if (userName) {
      return "Olá, " + userName
    }
    return null
  }

  petFoto(): String | null {
    return Constants.baseURL + this.pet.fotoPet
  }
}

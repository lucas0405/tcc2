import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginSucessoComponent } from './login/login-sucesso/login-sucesso.component';
import { AcheiPetComponent } from './achei-pet/achei-pet.component';
import {HttpClientModule} from '@angular/common/http';
import { PerdiPetComponent } from './perdi-pet/perdi-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    HomeComponent,
    LoginSucessoComponent,
    AcheiPetComponent,
    PerdiPetComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

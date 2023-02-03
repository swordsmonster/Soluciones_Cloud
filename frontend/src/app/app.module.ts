import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Agregado
//import { CancionesModule } from './canciones/canciones.module';
import { EventosModule } from './eventos/eventos.module';
import { HttpClientModule } from '@angular/common/http'

// Agregado Routing
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
//import { RegistryComponent } from './registry/registry.component';
//import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    // Agregado
    //CancionesModule,
    EventosModule,
    HttpClientModule,
    //Agragado Routing
    RouterModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
// Agregado
import { Cancion } from './cancion';
// Suscribiendose al servicio
import { CancionesService } from './canciones.service';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})

export class CancionesComponent implements OnInit {

  canciones: Array<Cancion>

  // Modificado
  constructor(private cancionesService: CancionesService) { }

  // Agregado
  getListaCanciones(){
    this.cancionesService.getCanciones('').subscribe(cs => {this.canciones = cs;});
  }

  ngOnInit() {
    // Agregado - Mock de prueba
    //this.canciones = [new Cancion("Prueba", 1, 10, "Memo")]
    this.getListaCanciones();
  }

}

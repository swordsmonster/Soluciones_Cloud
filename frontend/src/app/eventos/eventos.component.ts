import { Component, OnInit, NgZone } from '@angular/core';
// Agregado
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Evento } from './evento';
import { ServicioAPIService } from '../Servicios/ServicioAPI.service';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})

export class EventosComponent implements OnInit {

  eventos: Array<Evento>;

  name = ''
  message = ''

  // Modificado
  constructor(
    private router: Router,
    private servicioAPIService: ServicioAPIService
    ) { }

  ngOnInit() {
    this.getListaEventos();
  }

  // Agregado
  getListaEventos(){
    this.servicioAPIService.getEventos('').subscribe(cs => {this.eventos = cs;});
  }

  addEvent(): void {
    console.log('Add New Event')
    //this.router.navigate(['todos',-1])
  }

  refreshEvents(): void {
    console.log('refresh')
/*    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )*/
  }

  deleteEvent(id:number) : void {
    console.log(`delete todo ${id}` )
    /*this.todoService.deleteTodo('in28minutes', id).subscribe (
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )*/
  }

  updateEvent(id:number) : void {
    console.log(`update ${id}`)
    //this.router.navigate(['todos',id])
  }

}

import { Component, OnInit } from '@angular/core';
// Agregado
import { Evento } from './evento';
// Suscribiendose al servicio
import { EventosService } from './eventos.service';

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
  constructor(private eventosService: EventosService) { }

  // Agregado
  getListaEventos(){
    this.eventosService.getEventos('').subscribe(cs => {this.eventos = cs;});
  }

  ngOnInit() {
    // Agregado - Mock de prueba
    //this.canciones = [new Cancion("Prueba", 1, 10, "Memo")]
    this.getListaEventos();
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

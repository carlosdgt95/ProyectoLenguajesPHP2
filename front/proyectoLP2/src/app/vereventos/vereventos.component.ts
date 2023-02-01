import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Evento } from '../interface/evento';
import { EventosService } from '../services/eventos.service';


@Component({
  selector: 'app-vereventos',
  templateUrl: './vereventos.component.html',
  styleUrls: ['./vereventos.component.css']
})
export class VereventosComponent implements OnInit {

  events: Evento[] = [];
  error= 'fail';
  success = 'exitoso';
  

  constructor(private eventosService: EventosService) { }

  ngOnInit(): void {
  }

  getCars(): void {
    this.eventosService.getAllEvento().subscribe(
      (data: Evento[]) => {
        this.events = data;
        this.success = 'successful retrieval of the list';
      },
      (err) => {
        console.log(err);
        this.error = err;
      }
    );
  }
  

}

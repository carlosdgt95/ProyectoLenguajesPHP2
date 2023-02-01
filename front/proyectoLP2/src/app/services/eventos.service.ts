import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { Evento } from '../interface/evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  baseUrl = 'https://proyectolp2-e0fec-default-rtdb.firebaseio.com/events.json';

  constructor(private http: HttpClient) { }

/*
  getAllEvento(): Observable<any[]> {
    return this.http.get<any[]>('https://proyectolp2-e0fec-default-rtdb.firebaseio.com/events.json');
  }
  */

  getAllEvento() {
  
  return this.http.get('https://proyectolp2-e0fec-default-rtdb.firebaseio.com/events.json').pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }

}

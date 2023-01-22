import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-eventostandadd',
  templateUrl: './eventostandadd.component.html',
  styleUrls: ['./eventostandadd.component.css']
})

export class EventostandaddComponent implements OnInit {
  form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  
  
    
  }


  
  public get f():any{
    return this.form.controls;
  }

}

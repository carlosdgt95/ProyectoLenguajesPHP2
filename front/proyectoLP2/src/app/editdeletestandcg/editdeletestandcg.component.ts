import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-editdeletestandcg',
  templateUrl: './editdeletestandcg.component.html',
  styleUrls: ['./editdeletestandcg.component.css']
})
export class EditdeletestandcgComponent implements OnInit {

  form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  
  
    
  }


  
  public get y():any{
    return this.form.controls;
  }

}

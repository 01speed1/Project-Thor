import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators, FormControl } from '@angular/forms';
import { TypeRh } from './type-rh';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-type-rh',
  templateUrl: './type-rh.component.html',
  styleUrls: ['./type-rh.component.css']
})
export class TypeRhComponent implements OnInit {

  formRh: FormGroup;

  constructor(private formBuilder: FormBuilder, public router: Router) {

  }

  ngOnInit() {

    this.formRh = new FormGroup({
      name: new FormControl(null, Validators.required)
    });

  }  

  launchModal() {
    $('.ui.tiny.modal').modal('show');
  }

  createRh() {
    console.log('Hola', this.formRh.controls);
  }

}

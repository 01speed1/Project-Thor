import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-type-medicine',
  templateUrl: './type-medicine.component.html',
  styleUrls: ['./type-medicine.component.css']
})
export class TypeMedicineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $().ready( () => {
      $('select.dropdown').dropdown();
    });
  }

}

import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-type-breed',
  templateUrl: './type-breed.component.html',
  styleUrls: ['./type-breed.component.css']
})
export class TypeBreedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    $().ready( () => {
      $('select.dropdown').dropdown();
    });

  }

}

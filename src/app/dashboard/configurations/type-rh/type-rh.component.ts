import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TypeRh } from './type-rh-model';

import swal from 'sweetalert2';
import { TypeRhService } from '../../services/type-rh.service';
import { Observable } from 'rxjs';
declare const $: any;


@Component({
  selector: 'app-type-rh',
  templateUrl: './type-rh.component.html',
  styleUrls: ['./type-rh.component.css']
})
export class TypeRhComponent implements OnInit {
  
  update: boolean;
  formRh: FormGroup;
  typeRh: TypeRh = new TypeRh('');
  typeRhX: Observable<TypeRh[]>;
  title:  String;
  typeId: TypeRh;

  constructor(
        private _typeService: TypeRhService        
      ) {

    this.formRh = new FormGroup({
      name: new FormControl(null, Validators.required)
    });

    this.update = false;        
    
   }

  ngOnInit() {
    this.loadAllTypeRh();    
   }

  sendModaltoCreate() {
    this.update = false;
    this.title = 'Crear - Rh -';
    this.typeRh = new TypeRh('');
    this.formRh.patchValue(this.typeRh);
    $('#modalTypeRh').modal('show');
  }
  
  sendModaltoUpdate(typeRh: TypeRh) {
    this.update = true;
    this.title = 'Update - Rh -';
    // Adjunta { key => value } en el form
    this.formRh.patchValue(typeRh);
    this.typeId = typeRh['_id'];
    $('#modalTypeRh').modal('show');
  }

  // 100%
  loadAllTypeRh() {
    this._typeService.getAllTypeRh().subscribe( data => {
      return this.typeRhX = data.typeRh;      
    });        
  }

  // 100%
  createTypeRh() {
    if (this.formRh.invalid) {
      swal('Bad Job', '¡Ups! Algo va mal, formulario inválido..!', 'error' );
      return;
    }

    const typeRh = new TypeRh(this.formRh.value.name);

    this._typeService.saveTypeRh(typeRh).subscribe(data => {
      if(data['Ok'] !== true ) {
        swal('Bad Job', `¡Lo sentimos! Status: ${data[status]} `, 'error' );
        return;
      }
      
      // Muestra el Sweet Alert
      swal('Good Job', 'Tipo de Sangre creado exitosamente', 'success');
      // Resetea el formulario
      this.formRh.reset();
      // Carga los TypeRh 
      this.loadAllTypeRh();
      // Esconde el modal
      $('#modalTypeRh').modal('hide');
    });
  }

  // 100%
  deleteTypeRh(id: TypeRh) {
    this._typeService.deleteTypeRh(id).subscribe( data => {

      if(data['Ok'] !== true ) {
        swal('Bad Job', `¡Lo sentimos! Status: ${data[status]} `, 'error' );
        return;
      }

      swal('Good Job', `Tipo de Sangre eliminado correctamente `, 'success' );
      // Carga los TypeRh 
      this.loadAllTypeRh();
    });
  }  

  updateTypeRh(id?: TypeRh) {
    console.log('Update');
  }

  chooseActionTypeRh() {
    if(this.update) {
      this.updateTypeRh();
    } else {
      this.createTypeRh();
    }
  }

}

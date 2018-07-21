import { Component, OnInit } from '@angular/core';
import { TypeObjectModel } from './type-object-model';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { TypeObjectService } from '../../services/type-object.service';
import { Observable } from 'rxjs';


import swal from 'sweetalert2';


@Component({
  selector: 'app-type-object',
  templateUrl: './type-object.component.html',
  styleUrls: ['./type-object.component.css']
})
export class TypeObjectComponent implements OnInit {

  typeObjectModel = new TypeObjectModel('');
  formTypeObject: FormGroup;
  typeObjects: Observable<TypeObjectModel[]>;
  create: Boolean = true;
  idPaEditar;

  constructor(      
      private typeObjectService: TypeObjectService) { 

    this.formTypeObject = new FormGroup({
      name: new FormControl(null, Validators.required)
    });

    this.loadTypesObject();

  }

  ngOnInit() { }

  // Cargar Types/Object
  loadTypesObject() {
    this.typeObjectService.loadAllTypesObjects().subscribe(data => {
      this.typeObjects = data['typeObject'];
    });
  }

  // Guardar Types/Object
  saveTypeObject() {
    if(!this.formTypeObject.valid) {
      swal('!Ups¡' , 'Algo sucedió, por favor intente nuevamente!', 'error');
      return;
    }

    const dataTypeObject = new TypeObjectModel(this.formTypeObject.value.name);
    this.typeObjectService.saveTypeOject(dataTypeObject).subscribe( data => {
      if(data['Ok'] !== true ) {
        swal('Bad Job', `¡Lo sentimos! Status: ${data[status]} `, 'error' );
        return;
      }
      
      // Muestra el Sweet Alert
      swal('Good Job', 'Tipo de Objeto creado exitosamente', 'success');
      // Resetea el formulario
      this.formTypeObject.reset();

      this.loadTypesObject();
    });

    
  }

  // Obtener Type/Object para edición
  editTypeObject(type: TypeObjectModel) {
    this.create = false;
    this.formTypeObject.patchValue({name: type.name});
    this.idPaEditar = type['_id'];

  }

  // Actualizar Type/Object
  updateTypeObject() {
    this.typeObjectModel = new TypeObjectModel(this.formTypeObject.value.name);
    this.typeObjectService.updateTypeObject(this.idPaEditar, this.typeObjectModel).subscribe(data => {
      if(data['Ok'] !== true ) {
        swal('Bad Job', `¡Lo sentimos! Status: ${data[status]} `, 'error' );
        return;
      }
      
      // Muestra el Sweet Alert
      swal('Good Job', 'Tipo de Objeto editado exitosamente', 'success');
      // Resetea el formulario
      this.formTypeObject.reset();

      this.loadTypesObject();
    });
    this.create = true;
  }

  // Eliminar Type/Object
  deleteTypeObject(type: TypeObjectModel) {
    this.typeObjectService.deleteTypeObject(type['_id']).subscribe(data => {
      if(data['Ok'] !== true ) {
        swal('Bad Job', `¡Lo sentimos! Status: ${data[status]} `, 'error' );
        return;
      }
      
      // Muestra el Sweet Alert
      swal('Good Job', 'Objeto eliminado exitosamente', 'success');

      this.loadTypesObject();
    });
  }




}

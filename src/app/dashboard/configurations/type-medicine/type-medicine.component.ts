import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TypeMedicineModel } from './type-medicine.model';
import { Component, OnInit } from '@angular/core';
import { TypeMedicineService } from '../../services/type-medicine.service';

@Component({
  selector: 'app-type-medicine',
  templateUrl: './type-medicine.component.html',
  styleUrls: ['./type-medicine.component.css']
})
export class TypeMedicineComponent implements OnInit {

  typeMedicines: TypeMedicineModel[] = []
  formTypeMedicine: FormGroup;
  isEditing:boolean = false

  constructor(
    private fb: FormBuilder,
    private _typeMedicineService: TypeMedicineService) { }

  ngOnInit() {
    this.initFormTypeMedicine() 
    this.initAllTypesMedicines()
  }

  // construye la estructura del formulario para los typeMedicine
  initFormTypeMedicine() {
    this.formTypeMedicine = this.fb.group({
      name:         ['', Validators.required ] ,
      form:         ['', Validators.required],
      presentation: ['', Validators.required],
      qsymbol:      ['', Validators.required],
      symbol:       ['mg',Validators.required],
      _id:          ['']

    })
  }

  //carga inicial de typeMedicines
  initAllTypesMedicines(){
    this._typeMedicineService.loadAllTypesMedicines().subscribe( res =>{
      this.typeMedicines =  res['typeMedicine']
    })
  }

  //crear un typeMEdicine
  createTypeMedicine() {
    let newTypeMedicine:TypeMedicineModel = this.formTypeMedicine.value
    delete newTypeMedicine._id
    this._typeMedicineService
      .saveTypeMedicine( newTypeMedicine )
      .subscribe( res => {
        console.log(res);
        this.initFormTypeMedicine()
        this.initAllTypesMedicines()
      })


  }

  prepareToEditTypeMedicine( typeMedicine: TypeMedicineModel ) {
    this.isEditing = true
    this.formTypeMedicine.patchValue(typeMedicine);

  }

  editTypeMedicine() {
    let editedTypeMedicine:TypeMedicineModel = this.formTypeMedicine.value
    this._typeMedicineService
      .updateTypeMedicine( editedTypeMedicine )
      .subscribe( res=>{
        this.initFormTypeMedicine()
        this.isEditing = false
        this.initAllTypesMedicines()
      })

  }

  deleteTypeMedicine(id: string) {
    this._typeMedicineService
      .deleteTypeMedicine( id )
      .subscribe(res => {
        this.initAllTypesMedicines()
      })
  }


}

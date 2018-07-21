import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeMedicineModel } from '../configurations/type-medicine/type-medicine.model';

@Injectable({
  providedIn: 'root'
})
export class TypeMedicineService {

  api: string   = 'http://localhost:3000';  
  route: string =  '/api/master/medicine';

  constructor(private http: HttpClient) { }

  // Cargar Types/Medicines
  loadAllTypesMedicines() {
    const url = `${this.api}${this.route}`;
    return this.http.get(url);
  }
  
  // Guardar Types/Medicines
  saveTypeMedicine(TypeMedicine: TypeMedicineModel) {
    const url = `${this.api}${this.route}`;
    return this.http.post(url, TypeMedicine);
  }
  
  // Actualizar Types/Medicines
  updateTypeMedicine( TypeMedicine: TypeMedicineModel ) {
    const url = `${this.api}${this.route}/${TypeMedicine._id}`;
    return this.http.put(url, TypeMedicine);
  } 

  // Eliminar Type/Object
  deleteTypeMedicine(id: string) {
    const url = `${this.api}${this.route}/${id}`;
    return this.http.delete(url);
  }


}

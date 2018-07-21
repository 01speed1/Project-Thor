import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypeObjectModel } from '../configurations/type-object/type-object-model';


@Injectable({
  providedIn: 'root'
})
export class TypeObjectService {
  
  api: any   = 'http://localhost:3000';  
  route: any =  '/api/master/objects';

  constructor(private http: HttpClient) { }
  
  // Cargar Types/Objects
  loadAllTypesObjects() {
    const url = `${this.api}${this.route}`;
    return this.http.get(url);
  }
  
  
  // Guardar Types/Objects
  saveTypeOject(typeObject: TypeObjectModel) {
    const url = `${this.api}${this.route}`;
    return this.http.post(url, typeObject);
  }

  // Obtener Types/Objects
  getTypeObject(id: string) {
    const url = `${this.api}${this.route}/${id}`;
    return this.http.get(url);
  }

  // Actualizar Types/Objects
  updateTypeObject( id: string, update:TypeObjectModel ) {
    const url = `${this.api}${this.route}/${id}`;
    return this.http.put(url, update);
  } 



}

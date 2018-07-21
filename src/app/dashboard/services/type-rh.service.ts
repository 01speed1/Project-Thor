import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypeRh } from '../configurations/type-rh/type-rh-model';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class TypeRhService {  

  api:    any = 'http://localhost:3000';
  route:  any = '/api/master/rh';

  constructor(private http: HttpClient) { }  

  getAllTypeRh(): Observable<any> {
    const url = `${this.api}${this.route}`;
    return this.http.get(url);
  }

  saveTypeRh(typeRh: TypeRh) {
    const url = `${this.api}${this.route}`;
    return this.http.post(url, typeRh);
  }  

  updateTypeRh(id: String, updateTypeRh: FormGroup) {
    const url = `${this.api}${this.route}/${id}`;
    return this.http.put(url, updateTypeRh);
  }

  deleteTypeRh(id: TypeRh) {
    const url = `${this.api}${this.route}/${id}`;
    return this.http.delete(url);
  }

}

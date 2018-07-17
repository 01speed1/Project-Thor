import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypeRh } from '../configurations/type-rh/type-rh';

@Injectable({
  providedIn: 'root'
})
export class TypeRhService {  

  api:    any = 'http://localhost:3000';
  route:  any = '/dashboard/type-rh';

  constructor(private http: HttpClient) { }  



}

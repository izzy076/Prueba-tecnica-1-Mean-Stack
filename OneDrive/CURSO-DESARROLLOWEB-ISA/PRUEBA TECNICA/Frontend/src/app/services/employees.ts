import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee} from '../interfaces/employee';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService{
  private _httpClient = inject(HttpClient);
  private apiUrl = environment.appUrl;

  postEmployee(employeeToCreate:Employee){
    return this._httpClient.post(`${this.apiUrl}/employees`,employeeToCreate);
  }
  
  getEmployee(){
    return this._httpClient.get(`${this.apiUrl}/employees`);
  }

  putEmployee(employeeToCreate : Employee, id:string){
    return this._httpClient.put(`${this.apiUrl}/employees/${id}`,employeeToCreate);
  }

  deleteEmployee(id:string){
    return this._httpClient.delete(`${this.apiUrl}/employees/${id}`);
  }
  
}

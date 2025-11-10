// los servicios son lógica accesible desde cualquier parte de un proyecto
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from "../interfaces/department";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DepartmentService {

  private _httpClient = inject(HttpClient);
  private apiUrl = environment.appUrl;

  // petición Post
  postDepartment(departmentToCreate: Department) {
    return this._httpClient.post(this.apiUrl + '/departments/crear', departmentToCreate);
  };

  getDepartments() {
    return this._httpClient.get(this.apiUrl + '/departments/mostrar');
  };

  putDepartment(departmentToUpdate: Department, id: string) {
    return this._httpClient.put(`${this.apiUrl})/departments/actualizar${id}`, departmentToUpdate);
  };

  deleteDepartment(id: string) {
    return this._httpClient.delete(this.apiUrl + '/departaments/eliminar' + id);
  };
};


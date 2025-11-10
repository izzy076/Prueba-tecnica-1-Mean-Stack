// los servicios son lógica accesible desde cualquier parte de un proyecto
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department} from "../interfaces/department";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class departmentService
  
  private _httpClient = inject(HttpClient);
  private apiUrl = environment.appUrl; 

  // petición Post
  postDepartment(departmentToCreate: Department)
    return this._httpClient.post(this.apiUrl + '/products/crear', productToCreate);
  };

  // petición Get
  getProducts(){
    return this._httpClient.get(this.apiUrl + '/products/mostrar');
  };

  // petición Put
  putProduct(productToUpdate : Product, id:string){
    // return this._httpClient.put(this.apiUrl + '/products/actualizar/' + id, productToCreate); //OPCIÓN 1
    return this._httpClient.put (`${this.apiUrl})/products/actualizar/${id}`, productToUpdate);
  };

  // petición Delete
  deleteProduct(id: string){
    // return this._httpClient.delete(this.apiUrl + '/products/eliminar/' + id);
     return this._httpClient.delete(this.apiUrl + '/products/eliminar/' , { params : {id}
     }); //OPCIÓN 3
  };

};

import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employees';
import { Employee } from '../../interfaces/employee';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-employees',
  imports: [],
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})
export class Employees implements OnInit {

  private _employeeService = inject(EmployeeService);
  allEmployees : Employee[] = [];


  showEmployees(){
    this._employeeService.getEmployee().subscribe({
      next: (res : any)=>{
        console.log(res);
        this.allEmployees = res.data
        console.log(this.allEmployees);
      },
      error: (err : any)=>{
        console.error(err)
      }
    });
  }

  deleteEmployee(id : string){
    console.log("id del empleado a actualizar: ", id)
    this._employeeService.deleteEmployee(id).subscribe({
      next: (res : any)=>{
        console.log(res);
        Swal.fire({
          title: "Empleado eliminado",
          text: res.mensaje,
          icon: "success"
        }).then(() => {
          this.showEmployees();
        });
      },
      error: (err : any)=>{
        console.error(err)
      }
    })
  }
  
  updateEmployees(id : string){
    console.log("id del empleado a editar: ", id)
    
  }

  ngOnInit():void{
    this.showEmployees
  }

}

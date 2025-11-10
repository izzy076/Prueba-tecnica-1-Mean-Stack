import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employees';
import { Employee } from '../../interfaces/employee';
import { DepartmentService } from '../../services/departments';
import { Department } from '../../interfaces/department';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { Departments} from './pages/departments/departments';
import { Employees } from './pages/employees/employees';

export const routes: Routes = [
    {path: "", component: Home, title: "Inicio"},
    {path: "departments", component: Departments, title: "Departamentos"},
    {path: "employees", component: Employees, title: "Empleados"},
    {path: "**", component: NotFound, title: "404"}
];

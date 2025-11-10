import { Component, inject, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/departments';
import { Department } from '../../interfaces/department';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})


export class Card implements OnInit {

  _DepartmentService = inject(DepartmentService);

  allDepartments: Department[] = [];
  baseUrl : string = environment.appUrl;


  showDepartments(){

    this._DepartmentService.getDepartments().subscribe({

      next: (response : any) => {
        this.allDepartments = response.data;
        console.log(this.allDepartments);
       },
      error: (error : any) => { 
        console.error(error);
      } 

    })
  }

  ngOnInit(): void {
    this.showDepartments();
  }

}

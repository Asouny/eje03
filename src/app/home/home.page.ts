import { Component } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  employees: any = [
    {name:{firtsname:"MARCO ANTONIO",lastname:"RAMIREZ SANDOVAL"},RFC: "RASM980816", key:"16400982", activate: true, email: "leo___.fg@hotmail.com", date: "16/08/2020", type:"confianza",salary:10000},
    {name:{firtsname:"RIVERA RIOS",lastname: "SERGIO ERNESTO"},RFC: "RASM980816", key: "16400000", activate: false, email: "leo___.fg@hotmail.com", date: "17/08/2020", type:"base",salary:10000},
    {name:{firtsname:"SILVA CARVAJAR",lastname: "GERARDO FRANSISCO"},RFC: "RASM980816", key: "16400001", activate: true, email: "leo___.fg@hotmail.com", date: "18/08/2020", type:"confianza",salary:10000} ,
    {name:{firtsname:"CAMPOS AGUIRRE",lastname: "MICHELLE"},RFC: "RASM980816", key: "164000002", activate: false, email: "leo___.fg@hotmail.com", date: "20/08/2020", type:"confianza",salary:10000},
    {name:{firtsname:"MARCO ANTONIO",lastname: "RAMIREZ SANDOVAL"},RFC: "RASM980816", key: "16400003", activate: true, email: "leo___.fg@hotmail.com", date: "21/08/2020", type:"base",salary:10000} ,
    {name:{firtsname:"MARCO ANTONIO",lastname: "RAMIREZ SANDOVAL"},RFC: "RASM980816", key: "16400004", activate: false,email: "leo___.fg@hotmail.com", date: "26/08/2020", type:"confianza",salary:10000},
    {name:{firtsname:"MARCO ANTONIO",lastname: "RAMIREZ SANDOVAL"},RFC: "RASM980816", key: "16400005", activate: true,email: "leo___.fg@hotmail.com", date: "23/08/2020", type:"confianza",salary:10000} 
  ]
  isSingleClick: boolean;
  timer: number;
  


  constructor(private router:Router) {}

  view(employee: any): void{
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(employee)
      }
    };
    this.isSingleClick = true;
    setTimeout(() => {
        if (this.isSingleClick) {
          this.router.navigate(['/view-employee'], extras);
        }
     }, 250);
}

edit() {
  this.isSingleClick = false;
  this.router.navigate(['/view-formulario']);
}
}

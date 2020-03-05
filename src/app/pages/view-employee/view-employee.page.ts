import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Router} from "@angular/router"

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.page.html',
  styleUrls: ['./view-employee.page.scss'],
})
export class ViewEmployeePage implements OnInit {

  employee: any;
  constructor(private actroute: ActivatedRoute, private router: Router) {
    this.actroute.queryParams.subscribe(
    params => {
      this.employee = JSON.parse(params.special);
    }
    );

   }

  ngOnInit() {
  }

}

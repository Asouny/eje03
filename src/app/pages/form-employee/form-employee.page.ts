import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {ActivatedRoute , Router} from "@angular/router"

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.page.html',
  styleUrls: ['./form-employee.page.scss'],
})
export class FormEmployeePage implements OnInit {
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

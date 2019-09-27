import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyShowResponse } from './company-show-response';
import { BaseComponent } from 'src/app/core/base/base.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'company-show',
  templateUrl: './company-show.component.html',
  styleUrls: ['./company-show.component.scss']
})
export class CompanyShowComponent extends BaseComponent implements OnInit {

  companyDetails:CompanyShowResponse[];

  constructor(private router: Router,
    protected route:ActivatedRoute,
    protected commonService:CommonService,
    private _medicineService: MedicineService) {
    super(route, commonService);
      this.getAllCompanies();
   }

  ngOnInit() {
  }

  getAllCompanies = () => {
    this._medicineService.getAllCompanies().subscribe(
        res => {
          this.companyDetails=res;
          console.log("The Response :: "+JSON.stringify(res));
        },
        error => {
          console.log("The Response :: "+error);
        }
        );
  };

}

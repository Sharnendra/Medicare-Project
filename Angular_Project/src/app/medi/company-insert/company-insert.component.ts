import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyInsertResponse } from './company-insert-response';
import { BaseComponent } from 'src/app/core/base/base.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'stock-insert',
  templateUrl: './company-insert.component.html',
  styleUrls: ['./company-insert.component.scss']
})
export class CompanyInsertComponent extends BaseComponent implements OnInit {

  addCompanyForm:FormGroup;
  companyDetails:CompanyInsertResponse[];

  constructor(private router: Router,
    protected route:ActivatedRoute,
    protected commonService:CommonService,
    private _medicineService: MedicineService) {
    super(route, commonService);
      this.getAllCompanies();
   }

  ngOnInit() {
    this.createCompanyFormGroup();
  }

  createCompanyFormGroup = () => {
    this.addCompanyForm = new FormGroup({
      medicineName: new FormControl('',Validators.compose([
        Validators.required, 
        Validators.minLength(1)
      ])
      ),
      companyName: new FormControl('',Validators.compose([
        Validators.required, 
        Validators.minLength(1)
      ])),
      createdDate: new FormControl('',Validators.compose([
        Validators.required, 
        Validators.minLength(1)
      ])),
      modifiedDate: new FormControl('',Validators.compose([
        Validators.required, 
        Validators.min(1)
      ])),
    });
  };

  insertCompany = () => {
    this._medicineService.addCompany(this.addCompanyForm.getRawValue()).subscribe(
        res => {
          console.log("The Response :: "+res);
          this.getAllCompanies();
        },
        error => {
          console.log("The Response :: "+error);
        }
        );
  };

  resetCompany = () => {
    this.createCompanyFormGroup();
  };

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

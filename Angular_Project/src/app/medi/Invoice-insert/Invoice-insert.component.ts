import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InvoiceInsertResponse } from './Invoice-insert-response';
import { BaseComponent } from 'src/app/core/base/base.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'Invoice-insert',
  templateUrl: './Invoice-insert.component.html',
  styleUrls: ['./Invoice-insert.component.scss']
})
export class InvoiceInsertComponent extends BaseComponent implements OnInit {

  addInvoiceForm:FormGroup;
  InvoiceDetails:InvoiceInsertResponse[];

  constructor(private router: Router,
    protected route:ActivatedRoute,
    protected commonService:CommonService,
    private _medicineService: MedicineService) {
    super(route, commonService);
   }

  ngOnInit() {
    this.createInvoiceFormGroup();
  }

  createInvoiceFormGroup = () => {
    this.addInvoiceForm = new FormGroup({
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

  insertInvoice = () => {
    this._medicineService.addCompany(this.addInvoiceForm.getRawValue()).subscribe(
        res => {
          console.log("The Response :: "+res);
          this.createInvoiceFormGroup();
        },
        error => {
          console.log("The Response :: "+error);
        }
        );
  };

  resetInvoice = () => {
    this.createInvoiceFormGroup();
  };
}

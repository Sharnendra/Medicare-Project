import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MedicineService } from '../medicine.service';
import { error } from 'util';
import { StockShowResponse, Quantity } from './stock-show-response';
import { BaseComponent } from 'src/app/core/base/base.component';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'stock-show',
  templateUrl: './stock-show.component.html',
  styleUrls: ['./stock-show.component.scss']
})
export class StockShowComponent extends BaseComponent implements OnInit {
  stockDetails:StockShowResponse[];
  quantityDetails:Quantity[];


  constructor(private router: Router,
    protected route:ActivatedRoute,
    protected commonService:CommonService,
    private _medicineService: MedicineService) {
    super(route, commonService);
    this.getAllStock();
   }

  ngOnInit() {
  }

  getAllStock = () => {
    this._medicineService.getAllStock().subscribe(
        res => {
          this.stockDetails=res;
          console.log("The Response :: "+res);
          console.log("The Response :: "+JSON.stringify(res));
        },
        error => {
          console.log("The Response :: "+error);
        }
        );
  };
}
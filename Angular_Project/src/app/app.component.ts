import { Component, OnInit } from '@angular/core';
import { CommonService } from './core/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  brandingData:any;
  constructor(private _commonService:CommonService) { }
  
  ngOnInit() {
    if (this._commonService.headerSubjectObservable$) {
      this._commonService.headerSubjectObservable$.subscribe(data => {
        this.brandingData = data;
        console.log(this.brandingData);
      });
    }
  }
}

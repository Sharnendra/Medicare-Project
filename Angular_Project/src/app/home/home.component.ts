import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../core/base/base.component';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { CommonService } from '../core/common.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnInit {

  constructor(private router: Router,
    protected route:ActivatedRoute,
    protected commonService:CommonService) { 
      super(route, commonService);
    }

  ngOnInit() {
  }

}

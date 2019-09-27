import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() brandingData : any;
  constructor(private _commonService:CommonService,
              private router: Router,
              protected route:ActivatedRoute) { }

  ngOnInit() {
  }

  logout = () => {
    sessionStorage.removeItem("loggedInTokenId");
    sessionStorage.removeItem("userInfo");
    this.router.navigate(['/login']);
  }
}

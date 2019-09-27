import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { SignupComponent } from '../signup/signup.component';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { BaseComponent } from '../core/base/base.component';
import { CommonService } from '../core/common.service';
import { LoginService } from './login.service';
import { Message } from '../../../node_modules/@angular/compiler/src/i18n/i18n_ast';
import { HttpResponse } from '../../../node_modules/@angular/common/http';
import { LoginResponse } from './login-response';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {

  model: any = {};
  errorMessage:String;

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService,
              private router: Router,
              protected route:ActivatedRoute,
              protected commonService:CommonService,
              private _loginService:LoginService
) {
  super(route, commonService);
  sessionStorage.clear();
}
 
  openModalWithComponent() {
    this.bsModalRef = this.modalService.show(SignupComponent);
  }

  login = () => {
    console.log(this.model);
    this._loginService.doLogin(this.model).subscribe(
      res => {
        sessionStorage.setItem("loggedInTokenId",JSON.stringify(res.headers.get('bearer')));
        sessionStorage.setItem("userInfo",JSON.stringify(res.body));
        this.router.navigate(['/home']);
      },
      error => {
        this.errorMessage=error.error.errorMessage;
      }
      );
  }
  ngOnInit() {
  }

  clearErrMsg (){
    this.errorMessage=null;
  }

}

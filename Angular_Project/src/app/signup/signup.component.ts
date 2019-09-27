import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';;
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userSignupForm: FormGroup;
  constructor() {
  }
  ngOnInit() {
    this.userSignupForm = new FormGroup(
      {
        userFirstName:new FormControl("", Validators.compose([
          Validators.required, 
          Validators.minLength(6),
          Validators.pattern('^[a-zA-Z]+$')
        ])),
        userLastName:new FormControl("", Validators.compose([
          Validators.required, 
          Validators.minLength(6),
          Validators.pattern('^[a-zA-Z]+$')
        ])),
        userMail:new FormControl("", Validators.compose([
          Validators.required, 
          Validators.minLength(6)
        ])),
        userPassword:new FormControl("", Validators.compose([
          Validators.required, 
          Validators.minLength(8)
        ])),
        userConfirmPassword:new FormControl("", Validators.compose([
          Validators.required, 
          Validators.minLength(8)
        ])),
        acknowledgement:new FormControl()
      }
    )
  }

}

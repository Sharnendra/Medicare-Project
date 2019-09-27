import { Injectable } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public router: Router) { }

  canActivate() : boolean{
    const jwtToken = sessionStorage.getItem("loggedInTokenId");
    if(!(typeof jwtToken != 'undefined' && jwtToken)){
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

}

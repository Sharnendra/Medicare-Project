import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '../../../node_modules/@angular/common/http';
import { LoginResponse } from './login-response';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }

  doLogin (loginData):Observable<HttpResponse<LoginResponse>>{
    console.log(this.createLoginJSON(loginData));
    return this.httpClient.post<LoginResponse>('/medicare/services/login',this.createLoginJSON(loginData),{ observe: 'response' });
 }

 createLoginJSON(loginData){
  return {
    "email": loginData.email,
    "password": loginData.password,
    "userId": "",
    "userName": "",
    "userRole": ""
  };
}

}

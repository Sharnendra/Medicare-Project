import { Injectable } from '@angular/core';
import { Subject, Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public headerSubject : Subject<any>;
  public headerSubjectObservable$ : Observable<any>;

  constructor() {
    this.headerSubject = new Subject();
    this.headerSubjectObservable$ = this.headerSubject.asObservable();
   }
}

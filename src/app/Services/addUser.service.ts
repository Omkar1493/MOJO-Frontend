import { Injectable } from '@angular/core';
import { UserInfo } from '../Models/userInfo'
import { Observable ,throwError } from 'rxjs';
//import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/'
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpClientModule} from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable()
export class AddUserService {

constructor(  private http: HttpClient, private router: Router) { }
private loginAPI = 'http://localhost:8080/customer/login';
private signUpAPI = 'http://localhost:8080/customer/save';
private employeeByIdAPI='http://localhost:8080/customer/{id}';
private allEmployeesAPI="http://localhost:8080/customer";
private httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

createUser(user: UserInfo):Observable<any>{
  return this.http.post(this.signUpAPI, user);
}

validateUser(loginObj): Observable<any> {
  return this.http.post<any>(this.loginAPI, JSON.stringify(loginObj), this.httpOptions)
  .pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
  );
}

private handleError(err: HttpErrorResponse) {
  let errorMessage = '';
  if (err.error instanceof ErrorEvent) {
      errorMessage = `An Error Occured: ${errorMessage}`;
  } else {
      errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
  }

  return throwError(errorMessage);
  }

  getUserbyUserName(p): Observable<any>{
    p = this.generateURLString(p);
    return this.http.get<any>(this.employeeByIdAPI + p, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
  );
  }


  getAllReceivers(): Observable<any> {
    return this.http.get<any>(this.allEmployeesAPI, this.httpOptions)
    .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError)
    );
  }

  generateURLString(inString) {
    let splitArray = inString.split(" ");
    let outString =  '';
    for(let i = 0; i < splitArray.length; i++){
      outString += splitArray[i];
      if(i != splitArray.length-1){
        outString += '%20';
      }
    }
    return outString;
  }


  createtransactiondetails(user: UserInfo):Observable<any>{
    return this.http.post(this.transactionAPI, user);
  }



  }
 
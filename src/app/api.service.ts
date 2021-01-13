import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResourcesModal } from './resources/resources.modal';
import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
api:string;
  constructor(private http: HttpClient) { 
  	this.api="http://localhost:5000";
}
getApi():Observable<ResourcesModal[]>
{
 return this.http.get<ResourcesModal[]>(`${this.api}/getusers`).pipe(
 	retry(1),
 catchError(this.handleError)

   );

 
}
loginApi(data):Observable<>
{
 return this.http.post(`${this.api}/login`,data).pipe(
 	retry(1),
 catchError(this.handleError)

   );
}



putApi(data,id):Observable<ResourcesModal[]>
{
 return this.http.put(`${this.api}/usersdata/${id}`,data).pipe(
 	retry(1),
 catchError(this.handleError)

   );
}
postApi(data):Observable<ResourcesModal[]>
{
 return this.http.post(`${this.api}/adddata`,data).pipe(
 	retry(1),
 catchError(this.handleError)

   );
}

handleError(error) {

   let errorMessage = '';

   if (error.error instanceof ErrorEvent) {

     // client-side error

     errorMessage = `Error: ${error.error.message}`;

   } else {

     // server-side error

     errorMessage = `Error Code: ${error.status}Message: ${error.message}`;

   }

   window.alert(errorMessage);

   return throwError(errorMessage);

 }


}

// import { Injectable, Injector } from '@angular/core'; 
// import { HttpInterceptor } from '@angular/common/http'; 
//  import {ApiService} from './api.service';
 
// @Injectable({ 
// providedIn: 'root' 
// }) 
// export class AuthService implements HttpInterceptor{ 
// val: void; 
// constructor(private api:ApiService) {  
// console.log(this.val); 
// } 
// intercept(req,next) 
// { 
// console.log(this.api.getToken()); 
// let tkn=req.clone({ 
// setHeaders:{ 
// "Authorization":`Bearer ${this.api.putApi()}` 
// }  
// }) 
// return next.handle(tkn); 
// } 
 
 
 
// } 
 
 
 

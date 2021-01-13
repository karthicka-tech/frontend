import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router,private api: ApiService){

  }
  userData = {
    username: '',
    password: ''
  };
  submitted = false;
onSubmit(form, userData): void {
 this.api.loginApi(userData).subscribe(
  response=>{
    console.log(response);
   if(response.status==="Authenticated")
   {
this.router.navigateByUrl('/resources');
  }
  })
  form.reset();
  }
}

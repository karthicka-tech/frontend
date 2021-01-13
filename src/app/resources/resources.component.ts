import { Component, OnInit } from '@angular/core';
import { ResourcesModal } from './resources.modal';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
resources: ResourcesModal[];
srchText: string;
id:number;
userData = {
  fname: '',
 lname: ''
};
newData = {
  fname: '',
 lname: ''
};
  constructor(private api: ApiService) { }

  ngOnInit(): void {
this.getData();
  }




getData()
{
  this.api.getApi().subscribe(response => {
  console.log(response);
  this.resources = response.data;
}
);
}
  update(r): void{

console.log(r);
this.userData.fname = r.fname;
this.userData.lname = r.lname;
this.id=r._id;
  }

  updatedata(form, userData): void {
  console.log(form);
  console.log(userData);
this.api.putApi(userData,this.id).subscribe(
  response=>{
    console.log(response);
    if(response.status==="updatesuccess")
    {
     this.getData();
    }
  })
    }
    addResource(formdemo, newData){
      console.log(newData);
this.api.postApi(newData).subscribe(
  response=>{
    console.log(response);
    if(response.status==="Added newUserdata")
    {
     this.getData();
    }
  })
    }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourcesComponent } from './resources/resources.component';
import { LoginComponent } from './login/login.component';

const route: Routes = [
    {
        path: '',
        component : LoginComponent

    },
    {
        path: 'resources',
        component : ResourcesComponent

    }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [ RouterModule],
  providers: []
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { ResourcesComponent } from './resources/resources.component';
import {HTTP_INTERCEPTORS,HttpClientModule} from '@angular/common/http';
import { SearchPipe } from './search.pipe';
//import { AuthService } from './auth.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResourcesComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  //{ provide: HTTP_INTERCEPTORS, useClass:AuthService , multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

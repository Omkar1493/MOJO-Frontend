// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import {AddUserService} from './Services/addUser.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginUserComponent } from './Components/loginUser/loginUser.component'
import { RegisterUserComponent } from './Components/registerUser/registerUser.component';
import { CurrencyInfoComponent } from './Components/currencyInfo/currencyInfo.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {UserInfo} from './Models/userInfo';



@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginUserComponent,
    CurrencyInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClient, HttpClientModule, AddUserService, UserInfo] ,
  bootstrap: [AppComponent]
})
export class AppModule { }


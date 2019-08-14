import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {LoginUserComponent} from './Components/loginUser/loginUser.component';
import {RegisterUserComponent} from './Components/registerUser/registerUser.component';
import {CurrencyInfoComponent } from './Components/currencyInfo/currencyInfo.component';
import { TransactionFormComponent } from './Components/transactionForm/transactionForm.component';
import { DisplayTransactionDetailsComponent } from './Components/displayTransactionDetails/displayTransactionDetails.component';



const routes: Routes = [
  { path: 'login', component: LoginUserComponent},
  { path: 'signup', component: RegisterUserComponent},
  { path: 'currencyinfo', component: CurrencyInfoComponent},
  { path: 'transactionform', component: TransactionFormComponent},
  { path: 'displaytransaction', component: DisplayTransactionDetailsComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})


// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })
export class AppRoutingModule { }

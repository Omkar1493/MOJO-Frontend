import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AddUserService} from '../../Services/addUser.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {TransactionInfo} from '../../Models/transactionInfo';
import { UserInfo } from 'src/app/Models/userInfo';

@Component({
  selector: 'app-transactionForm',
  templateUrl: './transactionForm.component.html',
  styleUrls: ['./transactionForm.component.css']
})
export class TransactionFormComponent implements OnInit {
  loggeduser: any;
  receiverlist: []; 
  errorMessage: String;
  flag:boolean=false;
  flag2: boolean=false;
  transaction: any;
  public usertransaction: FormGroup;
  public user:UserInfo;
  
  constructor(private http: HttpClient, private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private userService: AddUserService) {}
  
  ngOnInit() {
      this.usertransaction = this.fb.group({
        firstName: ['', Validators.required],
        homecountry: ['' , Validators.required],
        userName: ['',Validators.required],
        email: ['', Validators.required],
        password:['', Validators.required]
      });

      this.userService.getAllReceivers()
      .subscribe(response => {
        this.receiverlist = response;
      },
      error => this.errorMessage =  error as any
      );
    }
  showsender(){
    this.userService.getUserbyUserName(this.route.snapshot.paramMap.get('userName'))
    .subscribe(response => {
      this.loggeduser = response;
      console.log(this.loggeduser);
      this.flag!=this.flag;
    },
    error => this.errorMessage =  error as any
    )}

  showreceiver()
  {
    this.flag2!=this.flag2;
  }
  
  public submit():void{
    this.user = this.receiverlist.filter(item=>item.firstName==)
  }
  
  public send(): void {

    this.transaction =  new TransactionInfo();  
    this.transaction.loggedUser.firstName = this.usertransaction.get("loggedUser.userName").value;
    this.transaction.loggedUser.email = this.usertransaction.get("loggedUser.email").value;
    this.transaction.homecountry = this.usertransaction.get("loggedUser.homecountry").value;
    this.transaction.userName = this.usertransaction.get("note").value;
    this.transaction.password = this.usertransaction.get("amount").value;
    alert('User Added');
    this.userService.createtransactiondetails(this.transaction).subscribe(response => {
       this.transaction = response;
       this.router.navigate(['displaytransaction'],this.transaction);
     },
     error => this.errorMessage = <any>error
  )
  }
}

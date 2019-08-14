import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AddUserService} from '../../Services/addUser.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-loginUser',
  templateUrl: './loginUser.component.html',
  styleUrls: ['./loginUser.component.css']
})
export class LoginUserComponent implements OnInit {
  public userlogin: FormGroup;
  errorMessage: string;
  response: any;
  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router, private userService: AddUserService,) { }


  ngOnInit(): void {
    this.userlogin = this.fb.group({
      userName: ['', Validators.required],
      password:['', Validators.required]
    });
  }


  public login() {
    // console.log("submit", this.loginForm);
    if (this.userlogin.value.userName && this.userlogin.value.password) {
        this.userService.validateUser(this.userlogin.value).subscribe(
            response => {
                this.response = response;
                this.router.navigate(['/transactionform',this.userlogin.value.userName]);
                alert("Welcome "+response.userName)

            },
            error => this.errorMessage = error as any
        );
    }
}

}
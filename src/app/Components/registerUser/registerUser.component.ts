import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {AddUserService} from '../../Services/addUser.service';
import {UserInfo} from '../../Models/userInfo';
@Component({
  selector: 'app-registerUser',
  templateUrl: './registerUser.component.html',
  styleUrls: ['./registerUser.component.css']
})
export class RegisterUserComponent implements OnInit {
  public useradd: FormGroup;
  public errorMessage: string;
  public user :UserInfo;


  constructor(private fb: FormBuilder,private router: Router, private userService: AddUserService, private users: UserInfo) { }

  ngOnInit(): void {
      this.useradd = this.fb.group({
        firstName: ['', Validators.required],
        homecountry: ['' , Validators.required],
        userName: ['',Validators.required],
        email: ['', Validators.required],
        password:['', Validators.required]
      });
    }

    public signUp(): void {
      // const user: UserInfo = {
      //   firstName: this.useradd.controls.firstName.value,
      //   lastName: this.useradd.controls.lastName.value ,
    

      // };
      this.user =  new UserInfo();  
      this.user.firstName = this.useradd.get("firstName").value;
      this.user.homecountry = this.useradd.get("homecountry").value;
      this.user.email = this.useradd.get("email").value;
      this.user.userName = this.useradd.get("userName").value;
      this.user.password = this.useradd.get("password").value;

      // if (this.useradd.valid) {
        console.log("Hello");
        
        alert('User Added');
        this.userService.createUser(this.user).subscribe(response => {
         this.user = response;
         this.router.navigate(['/login']);
       },
       error => this.errorMessage = <any>error
    )
      
    }
}

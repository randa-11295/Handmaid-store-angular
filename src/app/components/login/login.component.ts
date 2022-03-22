import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm?:FormGroup;
  constructor(private fb:FormBuilder,private _user:UserService,private _Router:Router) { }

  // loginForm?:FormGroup;

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }

  // get ff(){
  //   return this.loginForm.controls;
  // }
  submitForm(){
    //console.log(JSON.stringify( this.loginForm?.value));
    this._user.login(this.loginForm?.controls['email'].value);
    this._Router.navigateByUrl('/home')
   
    
  }

}

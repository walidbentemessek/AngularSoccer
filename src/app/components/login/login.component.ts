import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any={};
  loginForm:FormGroup;

  constructor(private fb:FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
    email:[''] ,
    password:['']

    })
  }
  login(){
    console.log(this.user);
    
    this.userService.login(this.user).subscribe(
      data=>{
        console.log('message login',data.message);
        this.router.navigate(['search']);
        
      }
    )
    
  }

}

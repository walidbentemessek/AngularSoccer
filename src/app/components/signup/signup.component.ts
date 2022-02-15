import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // user:any={};
  userForm: FormGroup;

  constructor(private fb: FormBuilder,private userService:UserService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.minLength(3), Validators.required]],
      lastName: ['', [Validators.minLength(3), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
      confPassword: ['', [Validators.minLength(8), Validators.required]],
      tel: ['', [Validators.minLength(8), Validators.required]]
    })
  }
  signup(s: any) {
    console.log('User', s);
    // let idUser = JSON.parse(localStorage.getItem('idU') || '10');
    // s.id = idUser;
    // let userLS = JSON.parse(localStorage.getItem('users') || '[]');
    // userLS.push(s);
    // localStorage.setItem('users', JSON.stringify(userLS));
    // localStorage.setItem('idU', idUser + 1);
    this.userService.signup(s).subscribe(
      (data)=>{
        console.log('signup up',data.message);
        
      }
    )
  }

}

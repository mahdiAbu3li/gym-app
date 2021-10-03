import { Component, OnInit  } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Response {
  username:string;
  password:string
}
@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm:FormGroup = new FormGroup({});
  islogin:boolean = true;
  constructor(private http :HttpClient , private router:Router) { }
 

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username' : new FormControl(''),
      'password' : new FormControl('')
    })
  }
  
  async onLogin (username:string , password:string) {

    const url = "http://localhost:3000/users?username="+ username + "&" + "password=" +  password;
    this.http.get<Response[]>(url)
    .subscribe((res) => {
      console.log(res)
      
      if(res.length > 0){
        this.islogin = true;
        this.router.navigate(["dashboard"])
    }
    else
    this.islogin = false;
    // this.loginForm.reset()
  })
  }
  onSubmit(){    
    this.onLogin(this.loginForm.value.username , this.loginForm.value.password);    
  }
  
}

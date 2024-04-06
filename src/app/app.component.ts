import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Import necessary form-related modules
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crt';

  signupUsers:any[] =[];
  signupObj: any =  {
    userName:"",
    email:"",
    password:"",
  };

  loginObj:any ={
    userName:"",
    password:"",
  }

  constructor(private router: Router) {}

  ngOnInit(): void{
    const localData = localStorage.getItem("signupUsers");
    if(localData!=null){
      this.signupUsers=JSON.parse(localData);
    }
  }

  onSignup(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem("signUpUsers",JSON.stringify(this.signupUsers));
    this.signupObj={
      userName:"",
      email:"",
      password:"",
    };
  }

  onLogin(){
    const isUserExist=this.signupUsers.find(m=>m.userName==this.loginObj.userName && m.password==this.loginObj.password)
    if(isUserExist!=undefined){
      alert("User Login success");
      //this.router.navigate(['/home']);
      
    }
    else{
      alert("wrong credentials entered")
    }
  }
}

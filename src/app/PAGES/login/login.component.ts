import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/SERVICE/auth.service';
import { TokenStorageService } from 'src/app/SERVICE/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup
  submitted = false
  constructor(private fb:FormBuilder , private router:Router,private authservice:AuthService ,private tokenservice:TokenStorageService){}
  ngOnInit(): void {
    console.log("Login")
     if (this.tokenservice.getToken()!=null) {
      this.router.navigateByUrl("home")
     }else {
      
      this.router.navigate(['/']);
     }
    this.addform()

  }
  addform(){
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }
  get form(){
    return this.loginForm.controls
  }
  login(){
    let data =this.loginForm.value;
    console.log(data)
    this.authservice.login(this.loginForm.value.username,this.loginForm.value.password).subscribe(data=>{
     this.tokenservice.saveUser(data)
     this.tokenservice.saveToken(data.accessToken);
     
      this.router.navigateByUrl('home');
      Swal.fire({
        icon: 'success',
        title: 'Valide',
        text: 'Connexion'
      })
      this.router.navigate(["/user"]);
    },error=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid Credentials !'
      })
    })

  }


}

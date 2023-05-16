import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/SERVICE/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifieruser',
  templateUrl: './modifieruser.component.html',
  styleUrls: ['./modifieruser.component.css']
})
export class ModifieruserComponent implements OnInit {

  myGroupfrom!:FormGroup
  iduser:any
  constructor( private userserv:UserService , private fb:FormBuilder ,private router:Router, private route:ActivatedRoute){
this.iduser=this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.addform()
    this.getuserbyid()
  }
  getuserbyid(){
    this.userserv.getuserByid(this.iduser).subscribe(data=>{
      console.log(data)
      this.myGroupfrom.patchValue(data)
    })
  }
  addform(){
    this.myGroupfrom=this.fb.group(
      {
        username:['',Validators.required],
        email:['',Validators.required],
        dob:['',Validators.required],
        numTel:['',Validators.required],
        pdp:['',Validators.required],
        password:['',Validators.required],
        salary:['',Validators.required],
        role:['',Validators.required],
        }
    )
     }
  updateuser(){
    let data=this.myGroupfrom.value
  
    console.log(data)
    if (this.myGroupfrom.invalid||this.myGroupfrom.value.length==0){
      Swal.fire({
         icon: 'error',
       title: 'Oops...',
         text: 'Verifier votre champs'
      })
    
      
      return
     }
     this.userserv.updateByid(this.iduser,data).subscribe(data=>{
      console.log(data)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: ' utilisateur modifier',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigateByUrl("/user")
      this.myGroupfrom.reset
     },error=>{console.log(error)})
  }

}

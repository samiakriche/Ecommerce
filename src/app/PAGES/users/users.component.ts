import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/SERVICE/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
listuser:any=[]
myGroupfrom!:FormGroup
  iduser: any;
  constructor(private userservice:UserService, private fb :FormBuilder,private router:Router){}
  ngOnInit(): void {
   this.getAll()
   this.addform()
  }
 getAll(){
  //appel service get all //subscribe retour el resultat dans variable esmou data 
  this.userservice.GetAll().subscribe(data=>{
    //affiche el result dans le console
    console.log(data)
    //mettre le resultat dans tableau
    this.listuser=data
    console.log(this.listuser)
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


 adduser(){
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
   this.userservice.saveUtilisateur(data).subscribe(data=>{
    console.log(data)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Nouveau utilisateur ajouté',
      showConfirmButton: false,
      timer: 1500
    })
    this.getAll()
    this.myGroupfrom.reset
   },error=>{console.log(error)})
  
 }
 deletuser(id:any){
  console.log(id)
  Swal.fire({
    title: 'Vous êtes sur?',
    text: "Vous voulez supprimer cet utilisateur !",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText:'Retour',
    confirmButtonText: 'Supprimer!'
  }).then((result)=>{
    if (result.isConfirmed){
      this.userservice.deletuser(id).subscribe(data=>{
        console.log(data)
        this.getAll()
        Swal.fire(
          'Supprimé!',
          'Utilisateur a été supprimé.',
          'success'
        )
     
      })
    }
  })
}
goto(id:any){
  console.log(id)
  this.router.navigate(['user/edituser/',id])
  this.iduser=id
  this.userservice.getuserByid(id).subscribe(data=>{
    console.log(data)
    this.myGroupfrom.patchValue(data)
  })
}


}

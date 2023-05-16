import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/SERVICE/user.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  listuser:any=[]
  myGroupfrom!:FormGroup
    iduser: any;
    role:any="CLIENT"
    constructor(private userservice:UserService, private fb :FormBuilder,private router:Router){}
    ngOnInit(): void {
     this.getAll()
     
    }
   getAll(){
    //appel service get all //subscribe retour el resultat dans variable esmou data 
    this.userservice.getuserByRole(this.role).subscribe(data=>{
      //affiche el result dans le console
      console.log(data)
      //mettre le resultat dans tableau
      this.listuser=data
      console.log(this.listuser)
    })
   }

}

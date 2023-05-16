import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/Models/Categorie';
import { CategorieService } from 'src/app/SERVICE/categorie.service';
import { UserService } from 'src/app/SERVICE/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categorie:any=[]
  myGroupfrom!:FormGroup
    iduser: any;
  
    constructor(private categorieservice:CategorieService, private fb :FormBuilder,private router:Router){}
    ngOnInit(): void {
     this.getAll()
     this.addform()
     
    }
   getAll(){
    //appel service get all //subscribe retour el resultat dans variable esmou data 
    this.categorieservice.getallCategorie().subscribe(data=>{
      //affiche el result dans le console
      console.log(data)
      //mettre le resultat dans tableau
      this.categorie=data
      console.log(this.categorie)
    })
   }
addform(){
  this.myGroupfrom=this.fb.group({
    code:['',Validators.required],
    libelle: ['',Validators.required],
    libelleArb:['',Validators.required],
    description:['',Validators.required],
    rang:['',Validators.required],
    libelleParent:['',Validators.required],
    codeParent:['',Validators.required],
    dernierRang:['',Validators.required],
    supprimer: ['',Validators.required],
    libelleSuiteParent:['',Validators.required],
    libelleSuiteParentArabe:['',Validators.required],
    idSuiteParent:['',Validators.required],
    parent:['',Validators.required],
    articles:['',Validators.required],
    listCategorieFils:['',Validators.required],
  })
}
addCateg(){
  let data = this.myGroupfrom.value
  console.log(data)
  let cat:Categorie=new Categorie()

  cat.code=this.myGroupfrom.value.code
  cat.libelle=this.myGroupfrom.value.libelle
  cat.description=this.myGroupfrom.value.description
  cat.libelleArb=this.myGroupfrom.value.libelleArb
  cat.codeParent=this.myGroupfrom.value.codeParent
 
  
  this.categorieservice.addnewcat(cat).subscribe(data=>{
    console.log(data)
    this.getAll()
  },error=>{console.log(error)})

}
deletcat(id:any){
  console.log(id)
  Swal.fire({
    title: 'Vous êtes sur?',
    text: "Vous voulez supprimer   !",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText:'Retour',
    confirmButtonText: 'Supprimer!'
  }).then((result)=>{
    if (result.isConfirmed){
      this.categorieservice.delete(id).subscribe(data=>{
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
goto(){
  this.router.navigateByUrl("/newcategorie")
}
}

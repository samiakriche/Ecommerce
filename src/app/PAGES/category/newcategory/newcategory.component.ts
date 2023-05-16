import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/Models/Categorie';
import { CategorieService } from 'src/app/SERVICE/categorie.service';

@Component({
  selector: 'app-newcategory',
  templateUrl: './newcategory.component.html',
  styleUrls: ['./newcategory.component.css']
})
export class NewcategoryComponent implements OnInit {
  
  myGroupfrom!:FormGroup
  constructor(private categorieservice:CategorieService, private fb :FormBuilder,private router:Router){}
    ngOnInit(): void {
    
     this.addform()
     
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
        
      },error=>{console.log(error)})
    
    }
}

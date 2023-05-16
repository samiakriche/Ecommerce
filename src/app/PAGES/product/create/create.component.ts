import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TvaService } from 'src/app/SERVICE/tva.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  myGroupfrom!:FormGroup
  listTva:any

constructor( private fb:FormBuilder , private tvaservice:TvaService){

}
  ngOnInit(): void {
   this.myGroupfrom=this.fb.group({
    code: ['', Validators.required], 
    taux:['', Validators.required], 
    designation:['',Validators.required]

   })
  }

  addtva(){
let data= this.myGroupfrom.value 
console.log(data)

  }
  deleteTva(id:any){
    
  }

}
/**
 * 
 * Mehdi Hassine
*onFileSelected(event:any){
  this.selectedFile=<File>event.target.files[0];
  console.log(this.selectedFile); 
 // get path of file 
 this.photo=this.selectedFile.name;

 console.log(this.photo);  
this.onUpload()

}

onUpload(){
  const formData = new FormData();
  formData.append('file', this.selectedFile);
  this.http.post(BACK_API+"/product/uploadPicturep",formData,{
    reportProgress:true,
    observe:'events'
  })
  .subscribe(event=>{
    

   
    console.log(event);
   // this.photo=this.selectedFile.name;
  });

}
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TvaService } from 'src/app/SERVICE/tva.service';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.css']
})
export class TvaComponent implements OnInit {
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

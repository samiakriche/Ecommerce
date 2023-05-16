import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from './token-storage.service';
const BACK_API = environment.baseURL;
@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  host="http://localhost:8080/categories";
  httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer ' + this.tokenStorageService.getToken() })
 };
   constructor(private http:HttpClient, private tokenStorageService:TokenStorageService) { }
 

   getallCategorie()
{
return this.http.get(this.host+'/Categorie',this.httpOptions)

}

addnewcat(body:any){
  return this.http.post(this.host+'/AjouterCategories',body, this.httpOptions)

}
delete(id:any){
  return this.http.delete(this.host+'/Categorie/'+id, this.httpOptions)

}

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from './token-storage.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 host="http://localhost:8080/api/auth";
 httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer ' + this.tokenStorageService.getUtilisateur().token })
};
  constructor(private http:HttpClient, private tokenStorageService:TokenStorageService) { }

  GetAll(){
    return this.http.get(this.host+"/GetallUsers");
  }
  adduser(body:any ){
    return this.http.post(this.host+"/addUser",body)

  }
  deletuser(id:any):Observable<any>{
    return this.http.delete(this.host+"/DeleteUser/"+id)
  }
  getuserByid(id:any):Observable<any>{
    return this.http.get(this.host+"/getByid/"+id)
  }
  updateByid(id:any,body:any):Observable<any>{
    return this.http.put(this.host+"/UpdateUser/"+id,body)
  }
  saveUtilisateur(UtilisateurData : any) : Observable<any>{ 
    return this.http.post(this.host + '/addUser', UtilisateurData , this.httpOptions);
  }
  getuserByRole(id:any):Observable<any>{
    return this.http.get(this.host+"/GetallUsersNotClient/"+id)
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './PAGES/category/category.component';
import { NewcategoryComponent } from './PAGES/category/newcategory/newcategory.component';
import { ClientComponent } from './PAGES/client/client.component';
import { HomeComponent } from './PAGES/home/home.component';
import { LoginComponent } from './PAGES/login/login.component';
import { CreateComponent } from './PAGES/Product/create/create.component';
import { ModifieruserComponent } from './PAGES/users/modifieruser/modifieruser.component';
import { UsersComponent } from './PAGES/users/users.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'user',component:UsersComponent},
  {path:'user/edituser/:id',component:ModifieruserComponent},
   {path:'client',component:ClientComponent},
   {path:'categorie',component:CategoryComponent},
   {path:'newcategorie',component:NewcategoryComponent},
   {path:'newproduct',component:CreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

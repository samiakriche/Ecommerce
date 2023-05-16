import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './PARTS/header/header.component';
import { SidebarComponent } from './PARTS/sidebar/sidebar.component';
import { FooterComponent } from './PARTS/footer/footer.component';
import { HomeComponent } from './PAGES/home/home.component';
import { LoginComponent } from './PAGES/login/login.component';
import { CategoryComponent } from './PAGES/category/category.component';
import { ProductComponent } from './PAGES/product/product.component';
import { TvaComponent } from './PAGES/tva/tva.component';
import { UsersComponent } from './PAGES/users/users.component';
import { LivraisonComponent } from './PAGES/livraison/livraison.component';
import { CommandeComponent } from './PAGES/commande/commande.component';
import { AvisComponent } from './PAGES/avis/avis.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientComponent } from './PAGES/client/client.component';
import { ModifieruserComponent } from './PAGES/users/modifieruser/modifieruser.component';
import { NewcategoryComponent } from './PAGES/category/newcategory/newcategory.component';
import { CreateComponent } from './PAGES/Product/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CategoryComponent,
    ProductComponent,
    TvaComponent,
    UsersComponent,
    LivraisonComponent,
    CommandeComponent,
    AvisComponent,
    ClientComponent,
    ModifieruserComponent,
    NewcategoryComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

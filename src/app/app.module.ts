import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { ListArticlesComponent } from './components/list-articles/list-articles.component';
import { AddArticlesComponent } from './components/add-articles/add-articles.component';
import { AddCategorieComponent } from './components/add-categorie/add-categorie.component';
import { ListCategorieComponent } from './components/list-categorie/list-categorie.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { DetailArticleComponent } from './components/detail-article/detail-article.component';
import { DetailCategorieComponent } from './components/detail-categorie/detail-categorie.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { DetailProjetComponent } from './components/detail-projet/detail-projet.component';
import { AddFactureComponent } from './components/add-facture/add-facture.component';
import { ListFactureComponent } from './components/list-facture/list-facture.component';
import { DetailFactureComponent } from './components/detail-facture/detail-facture.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ListClientComponent } from './components/list-client/list-client.component';
import { AddConteneurComponent } from './components/add-conteneur/add-conteneur.component';
import { ListConteneurComponent } from './components/list-conteneur/list-conteneur.component';
import { CapitalComponent } from './components/capital/capital.component';
import { DetailClientComponent } from './components/detail-client/detail-client.component';
import { DetailConteneurComponent } from './components/detail-conteneur/detail-conteneur.component';
import { DetailCapitalComponent } from './components/detail-capital/detail-capital.component';
import { AutresComponent } from './components/autres/autres.component';
import { AddDepotComponent } from './components/add-depot/add-depot.component';
import { ListDepotComponent } from './components/list-depot/list-depot.component';
import { LesCommandesComponent } from './components/les-commandes/les-commandes.component';
import { CommComponent } from './components/lesCommandes/comm/comm.component';
import { CommItemsComponent } from './components/lesCommandes/comm-items/comm-items.component';
import { OrderService } from './shared/order.service';
import { CommandeComponent } from './components/commande/commande.component';
import { CommandeItemComponent } from './components/commande-item/commande-item.component';

const routers: Routes = [
  {path: 'articles', component: ListArticlesComponent, },
  {path: 'detailarticle/:id', component: DetailArticleComponent},
  {path: 'capital', component: CapitalComponent  },
  {path: 'conteneurs', component: ListConteneurComponent },
  {path: 'addconteneur', component: AddConteneurComponent},


  {path:'addfacture',component: AddFactureComponent },
  {path:'factures',component: ListFactureComponent},
  {path:'addclient',component: AddClientComponent, },
  {path:'clients',component: ListClientComponent},
  {path:'autres',component: AutresComponent },
  {path: 'detailclient/:id', component: DetailClientComponent },
  {path: 'detailconteneur/:id', component: DetailConteneurComponent },
  {path: 'detailfacture/:id', component: DetailFactureComponent},
  {path: 'detailcapital', component: DetailCapitalComponent},

  // mettre les path pour editer les factures,clients et conteneur 

  {path: 'addarticle', component: AddArticlesComponent},
  {path: 'editarticle/:id', component: AddArticlesComponent},
  {path: '', redirectTo: '/articles', pathMatch: 'full'},
  {path: 'categories', component: ListCategorieComponent },
  {path: 'addcategorie', component: AddCategorieComponent },
  {path: 'editcategorie/:id', component: AddCategorieComponent },
  {path: 'detailcategorie/:id', component: DetailCategorieComponent, },

  {path: 'commande', component: CommandeComponent },
 
  //{path: '', redirectTo: '/categories', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
 //{path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'logout', component: LogoutComponent},
  //{path: '', redirectTo: '/logout', pathMatch: 'full'}
 // {path: 'detailprojet', component: DetailProjetComponent}
 {path:'commandes',component:LesCommandesComponent},
 {path:'editcommande/:id',component:CommandeComponent}
 //{path:'order',children:[
   //{path:'order',component:CommComponent},  
  // {path:'edit/:id',component:CommComponent}
 //]}

];

@NgModule({
  declarations: [
    AppComponent,
    ListArticlesComponent,
    AddArticlesComponent,
    AddCategorieComponent,
    ListCategorieComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,

    DetailArticleComponent,
    DetailCategorieComponent,
    DetailProjetComponent,
    AddFactureComponent,
    ListFactureComponent,
    DetailFactureComponent,
    AddClientComponent,
    ListClientComponent,
    AddConteneurComponent,
    ListConteneurComponent,
    CapitalComponent,
    DetailClientComponent,
    DetailConteneurComponent,
    DetailCapitalComponent,
    AutresComponent,
  
    AddDepotComponent,
    ListDepotComponent,
    LesCommandesComponent,
    CommComponent,
    CommItemsComponent,
    CommandeComponent,
    CommandeItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routers)
    
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

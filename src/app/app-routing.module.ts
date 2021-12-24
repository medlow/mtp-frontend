import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';

import { ListArticlesComponent } from './components/list-articles/list-articles.component';
import { AddArticlesComponent } from './components/add-articles/add-articles.component';
import { AddCategorieComponent } from './components/add-categorie/add-categorie.component';
import { ListCategorieComponent } from './components/list-categorie/list-categorie.component';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { DetailCategorieComponent } from './components/detail-categorie/detail-categorie.component';
import { DetailArticleComponent } from './components/detail-article/detail-article.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import {DetailProjetComponent} from './components/detail-projet/detail-projet.component'
import { CommandeComponent } from './components/commande/commande.component';
import { LesCommandesComponent } from './components/les-commandes/les-commandes.component';

const routes: Routes = [
  {path: 'articles', component: ListArticlesComponent,canActivate:[AuthGaurdService] },
  {path: 'detailarticle/:id', component: DetailArticleComponent,canActivate:[AuthGaurdService] },

  {path: 'addarticle', component: AddArticlesComponent,canActivate:[AuthGaurdService] },
  {path: 'editarticle/:id', component: AddArticlesComponent,canActivate:[AuthGaurdService] },
  //{path: '', redirectTo: '/articles', pathMatch: 'full'},
  {path: 'categories', component: ListCategorieComponent,canActivate:[AuthGaurdService] },
  {path: 'addcategorie', component: AddCategorieComponent,canActivate:[AuthGaurdService] },
  {path: 'editcategorie/:id', component: AddCategorieComponent,canActivate:[AuthGaurdService] },
  {path: 'detailcategorie/:id', component: DetailCategorieComponent,canActivate:[AuthGaurdService] },
  {path: 'commande', component: CommandeComponent },

  //{path: '', redirectTo: '/categories', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
 //{path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  //{path: '', redirectTo: '/logout', pathMatch: 'full'}
  {path: 'detailprojet', component: DetailProjetComponent},
  {path:'commandes',component:LesCommandesComponent},

];

@NgModule({
  imports: [FormsModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

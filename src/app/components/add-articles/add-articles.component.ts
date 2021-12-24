
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { CategorieService} from 'src/app/services/categorie.service';
import { Categorie } from 'src/app/models/categorie';

import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators } from '@angular/forms';


import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-articles',
  templateUrl: './add-articles.component.html',
  styleUrls: ['./add-articles.component.css']
})
export class AddArticlesComponent implements OnInit {

  article: Article = new Article();
  categories: Categorie[];
  
  //service: any;


  constructor(private _articleService: ArticleService,
              private _router: Router,
              public categorieService: CategorieService,

              private _activatedRoute: ActivatedRoute) { }


              

  ngOnInit(): void {
    const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');
    if (isIdPresent) {
        const id = +this._activatedRoute.snapshot.paramMap.get('id');
        this._articleService.getArticle(id).subscribe(
          data => this.article = data 
        )
    }
    this.categorieService.getCategories().subscribe(
      response =>{this.categories = response;}
     );
  
  }
 
  
  saveArticle() {
    this._articleService.saveArticle(this.article).subscribe(
      data => {
        console.log('response', data);
        this._router.navigateByUrl("/articles");
      }
    )
  }

  deleteArticle(id: number) {
    this._articleService.deleteArticle(id).subscribe(
      data => {
        console.log('deleted response', data);
        this._router.navigateByUrl('/articles');
      }
    )
  }

}


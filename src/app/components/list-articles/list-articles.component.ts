
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';
import { CategorieService} from 'src/app/services/categorie.service';
import { Categorie } from 'src/app/models/categorie';






@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {

  articles: Article[] = [];
  categories: Categorie[];

  filters = {
    keyword: '',
    sortBy: 'Trier par Nom'
  }

  constructor(private _articleService: ArticleService,
    private router: Router) { }

  ngOnInit(): void {
    this.listArticles();
  }

  deleteArticle(id: number) {
    this._articleService.deleteArticle(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.listArticles();
      }
    )
  }

  listArticles() {
    this._articleService.getArticles().subscribe(
      data => this.articles = this.filterArticles(data)
    )
  }
 
  articleDetails(id: number){
    this.router.navigate(['detailarticle', id]);
  }
  categorieDetails(id: number){
    this.router.navigate(['detailcategorie', id]);
  }


  filterArticles(articles: Article[]) {
    return articles.filter((e) => {
      return e.nom_art.toLowerCase().includes(this.filters.keyword.toLowerCase());
    }).sort((a, b) => {
      if (this.filters.sortBy === 'Trier par Nom') {
        return a.nom_art.toLowerCase() < b.nom_art.toLowerCase() ? -1: 1;
      }else if(this.filters.sortBy === 'Trier par Prix') {
        return a.pv_art > b.pv_art ? -1: 1;
      }else {return 0;}
    })
  }
}



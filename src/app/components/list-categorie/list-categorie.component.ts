import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent implements OnInit {

  categories: Categorie[] = [];

  filters = {
    keyword: '',
    sortBy: 'Trier de A à Z'
  }

  constructor(private _categorieService: CategorieService,
                        private router: Router) { }

  ngOnInit(): void {
    this.listCategories();
  }

  deleteCategorie(id: number) {
    this._categorieService.deleteCategorie(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.listCategories();
      }
    )
  }

  listCategories() {
    this._categorieService.getCategories().subscribe(
      data => this.categories = this.filterCategories(data)
    )
  }
  categorieDetails(id: number){
    this.router.navigate(['detailcategorie', id]);
  }
  filterCategories(categories: Categorie[]) {
    return categories.filter((e) => {
      return e.nom_categ.toLowerCase().includes(this.filters.keyword.toLowerCase());
    }).sort((a, b) => {
      if (this.filters.sortBy === 'Trier de A à Z') {
        return a.nom_categ.toLowerCase() < b.nom_categ.toLowerCase() ? -1: 1;
      }else if(this.filters.sortBy === 'Trier de Z à A') {
        return a.nom_categ.toLowerCase() > b.nom_categ.toLowerCase() ? -1: 1;
      }
      else {return 0;}
    })
  }
}



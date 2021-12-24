import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  categorie: Categorie = new Categorie();

  constructor(private _categorieService: CategorieService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');
    if (isIdPresent) {
        const id = +this._activatedRoute.snapshot.paramMap.get('id');
        this._categorieService.getCategorie(id).subscribe(
          data => this.categorie = data 
        )
    }
  }

  saveCategorie() {
    this._categorieService.saveCategorie(this.categorie).subscribe(
      data => {
        console.log('response', data);
        this._router.navigateByUrl("/categories");
      }
    )
  }

  deleteCategorie(id: number) {
    this._categorieService.deleteCategorie(id).subscribe(
      data => {
        console.log('deleted response', data);
        this._router.navigateByUrl('/categories');
      }
    )
  }

}


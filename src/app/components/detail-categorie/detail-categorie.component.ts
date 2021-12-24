import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';


@Component({
  selector: 'app-detail-categorie',
  templateUrl: './detail-categorie.component.html',
  styleUrls: ['./detail-categorie.component.css']
})
export class DetailCategorieComponent implements OnInit {

  id: number;
  categorie: Categorie;

  constructor(private route: ActivatedRoute,private router: Router,
    private categorieService: CategorieService) { }

  ngOnInit() {
    this.categorie = new Categorie();

    this.id = this.route.snapshot.params['id'];
    
    this.categorieService.getCategorie(this.id)
      .subscribe(data => {
        console.log(data)
        this.categorie = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['categories']);
  }
}
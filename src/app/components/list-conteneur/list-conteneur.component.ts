import { Component, OnInit } from '@angular/core';
import { Conteneur } from 'src/app/models/conteneur';
import { ConteneurService } from 'src/app/services/conteneur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-conteneur',
  templateUrl: './list-conteneur.component.html',
  styleUrls: ['./list-conteneur.component.css']
})
export class ListConteneurComponent implements OnInit {

  conteneurs: Conteneur[] = [];

  filters = {
    keyword: '',
    sortBy: 'Trier de A à Z'
  }

  constructor(private _conteneurService: ConteneurService,
                        private router: Router) { }

  ngOnInit(): void {
    this.listConteneurs();
  }

  deleteConteneur(id: number) {
    this._conteneurService.deleteConteneur(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.listConteneurs();
      }
    )
  }

  listConteneurs() {
    this._conteneurService.getConteneurs().subscribe(
      data => this.conteneurs = this.filterConteneurs(data)
    )
  }
  conteneurDetails(id: number){
    this.router.navigate(['detailconteneur', id]);
  }
  filterConteneurs(conteneurs: Conteneur[]) {
    return conteneurs.filter((e) => {
      return e.ref_cont.toLowerCase().includes(this.filters.keyword.toLowerCase());
    }).sort((a, b) => {
      if (this.filters.sortBy === 'Trier de A à Z') {
        return a.ref_cont.toLowerCase() < b.ref_cont.toLowerCase() ? -1: 1;
      }else if(this.filters.sortBy === 'Trier de Z à A') {
        return a.ref_cont.toLowerCase() > b.ref_cont.toLowerCase() ? -1: 1;
      }
      else {return 0;}
    })
  }
}



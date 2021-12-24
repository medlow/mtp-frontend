import { Component, OnInit } from '@angular/core';
import { Conteneur } from 'src/app/models/conteneur';
import { ConteneurService } from 'src/app/services/conteneur.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-conteneur',
  templateUrl: './add-conteneur.component.html',
  styleUrls: ['./add-conteneur.component.css']
})
export class AddConteneurComponent implements OnInit {

  conteneur: Conteneur = new Conteneur();
  
depots:["diamlaye","dakar","Geule tapée"];
  constructor(private _conteneurService: ConteneurService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');
    if (isIdPresent) {
        const id = +this._activatedRoute.snapshot.paramMap.get('id');
        this._conteneurService.getConteneur(id).subscribe(
          data => this.conteneur = data 
        )
    }
  }

  saveConteneur() {
    this._conteneurService.saveConteneur(this.conteneur).subscribe(
      data => {
        console.log('response', data);
        this._router.navigateByUrl("/conteneurs");
      }
    )
  }

  deleteConteneur(id: number) {
    this._conteneurService.deleteConteneur(id).subscribe(
      data => {
        console.log('deleted response', data);
        this._router.navigateByUrl('/conteneurs');
      }
    )
  }

}


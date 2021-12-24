import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client: Client = new Client();

  constructor(private _clientService: ClientService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');
    if (isIdPresent) {
        const id = +this._activatedRoute.snapshot.paramMap.get('id');
        this._clientService.getClient(id).subscribe(
          data => this.client = data 
        )
    }
  }

  saveClient() {
    this._clientService.saveClient(this.client).subscribe(
      data => {
        console.log('response', data);
        this._router.navigateByUrl("/clients");
      }
    )
  }

  deleteClient(id: number) {
    this._clientService.deleteClient(id).subscribe(
      data => {
        console.log('deleted response', data);
        this._router.navigateByUrl('/clients');
      }
    )
  }

}


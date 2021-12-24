import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  clients: Client[] = [];

  filters = {
    keyword: '',
    sortBy: 'Trier de A à Z'
  }

  constructor(private _clientService: ClientService,
                        private router: Router) { }

  ngOnInit(): void {
    this.listClients();
  }

  deleteclient(id: number) {
    this._clientService.deleteClient(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.listClients();
      }
    )
  }

  listClients() {
    this._clientService.getClients().subscribe(
      data => this.clients = this.filterclients(data)
    )
  }
  clientDetails(id: number){
    this.router.navigate(['detailclient', id]);
  }
  filterclients(clients: Client[]) {
    return clients.filter((e) => {
      return e.nom_cli.toLowerCase().includes(this.filters.keyword.toLowerCase());
    }).sort((a, b) => {
      if (this.filters.sortBy === 'Trier de A à Z') {
        return a.nom_cli.toLowerCase() < b.nom_cli.toLowerCase() ? -1: 1;
      }else if(this.filters.sortBy === 'Trier de Z à A') {
        return a.nom_cli.toLowerCase() > b.nom_cli.toLowerCase() ? -1: 1;
      }
      else {return 0;}
    })
  }
}



import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { OrderService } from 'src/app/shared/order.service';
import { Order } from 'src/app/shared/order.model';
@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class  CommandeComponent implements OnInit {
  order: Order = new Order();
  constructor() { }

  ngOnInit(): void {
  }
 
  
  }
  
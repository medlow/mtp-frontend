import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 public  username = '';
  public password = '';
  public invalidLogin = false;

  constructor(private router: Router,
    private loginservice: AuthentificationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authentificate(this.username, this.password)
    ) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}
//option let categorie of categories
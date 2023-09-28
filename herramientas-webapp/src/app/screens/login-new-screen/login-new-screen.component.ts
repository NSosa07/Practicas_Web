import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-new-screen',
  templateUrl: './login-new-screen.component.html',
  styleUrls: ['./login-new-screen.component.scss']
})
export class LoginNewScreenComponent {
  public type: String = "password";
  public username: String = "";
  public password: String = "";

  public errors:any = {};

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  public login(){
    if(this.username != "" && this.password != ""){
      this.router.navigate(["login-nuevo"]);
    }
    else{
      if(this.username == ""){

        this.errors.username = "Campo requerido";
      }
      if(this.password == ""){
        this.errors.password = "Campo requerido";
      }
    }
  }

  public showPassword(){
    if(this.type == "password"){
      this.type = "text";
    }else{
      this.type = "password";
    }
  }

  public goRegistro(){
    this.router.navigate(["registro"]);
  }

}//Fin clase
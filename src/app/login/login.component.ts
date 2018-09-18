import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../usuario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulariologin: FormGroup
  errorLogin: boolean

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.formulariologin = new FormGroup({
      alias: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),

    })
    this.errorLogin = false
  }

  ngOnInit() {
  }

  login() {
    this.usuarioService.getUsuarios(this.formulariologin.value).then((res)=>{
      console.log(res.json())
      let user= res.json().alias
       console.log(user)
       switch (user) {
          case "fail":
              this.errorLogin = true
            break;
          case "profe":
            this.router.navigate(['/ciudades'])
            break;
          case "admin":
            this.router.navigate(['/administracion'])
            break;
          default:
            // code...
            break;
        } 


    })
  }
}

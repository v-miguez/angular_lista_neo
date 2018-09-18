import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {

  constructor(private router: Router) {} 

  ngOnInit() {
  }
  irAMadrid(){
    console.log("Madrid")
    this.router.navigate(["/cursos", "madrid"])
  }
  irABarcelona(){
    console.log("Barcelona")
    this.router.navigate(["/cursos", "barcelona"])
  }

}

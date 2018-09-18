import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { ActivatedRoute} from '../../../node_modules/@angular/router';
import { UtilsService } from '../utils.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent implements OnInit {

  cursos: string
  parametros: any
  alumnos: any
  falta: any
  fecha: any
  constructor(private router: Router, private ususarioService: UsuarioService, private activatedRoute: ActivatedRoute, private utilService: UtilsService) {

    this.parametros = this.activatedRoute.params.subscribe(params =>{

      this.cursos = params.curso


    })
    this.falta=[]


    this.ususarioService.getAlumnos(this.cursos).then((res)=>{


      this.alumnos = res.json()

      this.alumnos.forEach((item)=>{

        this.falta.push(0)

      })
   
    })
    
    this.fecha = new Date().toISOString().split('T', 1)
    this.fecha = this.fecha[0]
    console.log(this.fecha)
  }  

 

  ngOnInit(){
  }

  faltaAlumno(index){
     
    let pos = this.falta[index]
    pos++
    if(pos >= 3) pos = 0

    this.falta[index] = pos


  }

  enviarFaltas(){



   this.utilService.enviarFaltas(this.falta, this.alumnos).then((res)=>{

     console.log(res)

   })
   alert('Enviado!')

  }
  cambiarFecha(event){

     let fecha = event.srcElement.value
    this.router.navigate(['/asistencia', fecha ])

  }

} 
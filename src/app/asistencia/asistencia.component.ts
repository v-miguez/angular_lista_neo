import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { UtilsService } from '../utils.service'
import { Router } from '@angular/router'

@Component({
    selector: 'app-asistencia',
    templateUrl: './asistencia.component.html',
    styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {

    alumnos: any
    fecha: string
    falta: any
    constructor(private activatedRoute: ActivatedRoute, private utilService: UtilsService, private router: Router) {

        this.falta= []
        this.activatedRoute.params.subscribe((i)=>{

            this.fecha = i.fecha

        })


        this.utilService.getAsistenciaFecha(this.fecha).then((res)=>{

            this.alumnos = res.json()

            this.alumnos.forEach((item)=>{

                this.falta.push(item.estado)

            })

        })


    }

    ngOnInit() {
    }


    faltaAlumno(estado, index){

        let pos = this.alumnos[index].estado


        console.log(pos)
        pos++

        

        this.alumnos[index].estado = pos
        this.falta[index] = pos
    }



  enviarFaltas(){
      console.log(this.falta)
       this.utilService.actualizarFaltas(this.falta, this.alumnos, this.fecha).then((res)=>{

           console.log(res)

       })
  }

  cambiarFecha(event){

     let fecha = event.srcElement.value
    this.router.navigate(['/asistencia', fecha ])

  }

}

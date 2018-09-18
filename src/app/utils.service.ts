import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable({
    providedIn: 'root'
})
export class UtilsService {
    baseUrl: any;

    constructor(private http: Http) {
        this.baseUrl = 'http://localhost:3000';
    }
    getCiudades(ciudad) {
       
        let url = `${this.baseUrl}/api/clases/ciudad/${ciudad}`;
       
        return this.http.get(url).toPromise()
    }


    enviarFaltas(faltas, alumnos){
    	let url = `${this.baseUrl}/api/asistencia/faltas`
    	return this.http.post(url, {faltas: faltas, alumnos: alumnos}).toPromise()
    }


    getAsistenciaFecha(fecha){
        let url = `${this.baseUrl}/api/asistencia/fecha`
        return this.http.post(url, {fecha: fecha}).toPromise()
    }


    actualizarFaltas(faltas, alumnos, fecha){
        let url = `${this.baseUrl}/api/asistencia/actualizar`
        return this.http.post(url, {faltas: faltas, alumnos: alumnos, fecha: fecha}).toPromise()



    }
}
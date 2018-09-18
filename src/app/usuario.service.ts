import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    baseUrl: any;

    constructor(private http: Http) {
        this.baseUrl = 'http://localhost:3000';
    }


    getUsuarios(formulario) {
       
        let url = `${this.baseUrl}/api/login`;
        console.log(url)
        return this.http.post(url, formulario).toPromise()
    }


    getAlumnos(curso){
        let Url = `${this.baseUrl}/api/alumnos/clase/${curso}`;
        return this.http.get(Url).toPromise()
        
    }


}
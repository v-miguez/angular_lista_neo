import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    baseUrl: any;

    constructor(private http: Http) {
        this.baseUrl = 'http://fbc2e51b.ngrok.io';
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
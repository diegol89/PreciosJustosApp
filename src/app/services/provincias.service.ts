import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProvinciasService {
  constructor(private http: HttpClient) {}
  getProvincias() {
    // return this.http.get('https://panalsoft.com/precios-justos/api/v1/provincias.json');
    return this.http.get('./assets/api/provincias.json').pipe(
      map((data: any) => {
        let respuesta = data.map((provincia: any) => {
          /* return {
            nombre: provincia.nombre,
            id: provincia.id,
            url: provincia.api,
          }; */
          let aux = {
            ...provincia,
            url: provincia.api,
          };
          delete aux.api;
          return aux;
        });
        // console.log(respuesta);

        return respuesta;
      })
    );
  }
}

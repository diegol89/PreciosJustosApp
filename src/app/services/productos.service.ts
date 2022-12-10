import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getProductos(provincia:string) {
    return this.http.get('./assets/api/' + provincia +'.json')
      .pipe(
        map((data: any) => {
          // aca transformo datos
          data.values.shift()
          data.values.shift()

          return data.values.map((producto:any) => {
            let precioTemp = producto[2]
              .replace('.', '')
              .replace(',', '.')
            return {
              ean: parseInt(producto[0]),
              nombre: producto[1],
              precio: parseFloat(precioTemp),
            }
          })
        })
      )
  }

}
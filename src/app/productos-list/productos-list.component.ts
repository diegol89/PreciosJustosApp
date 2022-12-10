import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

export interface Producto {
  ean: number;
  nombre: string;
  precio: number;
}

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css'],
})

export class ProductosListComponent implements OnInit {
  // lista completa de productos - backup
  productos: Producto[] = [];
  // lista de productos filtrados, que le muestro usuarios
  productosFiltrados: Producto[] = [];
  provinciaSlctd: string = 'tierra-del-fuego';
  filtroTexto: string = "";
  filtroPrecio: number = 0;
  precioMaximo: number = 1000;

  constructor(productosSrv: ProductosService,actRoute: ActivatedRoute,private location: Location) {
    const { nombreProvincia } = actRoute.snapshot.params;

    this.provinciaSlctd = nombreProvincia;

    productosSrv.getProductos(nombreProvincia).subscribe((data: any) => {
      this.productos = data;
      this.productosFiltrados = data;
      // actualizar la variable que contiene el precio maximo de los productos
      this.precioMaximo = Math.max(...this.productos.map((producto) => producto.precio)) + 1;
      this.filtroPrecio = this.precioMaximo;
    });
  }

  goBack() {
    this.location.back();
  }

  onFiltroTextoChange(parametroIngresado: any) {
    this.productosFiltrados = this.productos.filter((producto) => {
      if (this.filtroPrecio != 0){
        // esto significa que el usuario ingreso filtro
        // tengo que filtrar por nombre y codigo y ademas por precio
        return (producto.nombre.toLowerCase().includes(parametroIngresado.toLowerCase())
            || (producto.ean + '').includes(parametroIngresado)) && producto.precio <= this.filtroPrecio;
      }
      else{
        // solo filtro por nombre y por codigo
        return producto.nombre.toLowerCase().includes(parametroIngresado.toLowerCase())
          || (producto.ean + '').includes(parametroIngresado);
      }
    });
  }

  onFiltroPrecioChange(parametroIngresado: any) {
    this.productosFiltrados = this.productos.filter((producto) => {
      if (this.filtroTexto != ""){
        return producto.precio <= parametroIngresado && (
          producto.nombre.toLowerCase().includes(this.filtroTexto.toLowerCase())
            || (producto.ean + '').includes(this.filtroTexto)
        )
      }
      else{
        return producto.precio <= parametroIngresado;
      }
    })
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { ProvinciasService } from '../services/provincias.service';
import { Location, NgSwitchCase } from '@angular/common';
import { Router } from '@angular/router';

export interface Provincia {
  id: number;
  nombre: string;
  url: string;
}
@Component({
  selector: 'app-provincias-select',
  templateUrl: './provincias-select.component.html',
  styleUrls: ['./provincias-select.component.css'],
})
export class ProvinciasSelectComponent implements OnInit {

  provincias: Provincia[] = [];

  provinciaSlctd: Provincia = {
    id: 0,
    nombre: '',
    url: '',
  };

  constructor(
    private provSrv: ProvinciasService,
    private location: Location,
    private router: Router
  ) {
    provSrv.getProvincias().subscribe((data: any) => {
      this.provincias = data;
    });
  }

  handleOnClickButton() {
    // this.router.navigateByUrl(
    //   `/provincias/${this.provinciaSlctd.nombre
    //     .toLowerCase()
    //     .replace(/ /g, '-')}/productos`
    // );

    this.router.navigateByUrl(
      `/provincias/${this.provinciaSlctd.url}/productos`
    );
  }

  ngOnInit(): void {}
}



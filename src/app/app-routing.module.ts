import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { P404Component } from './p404/p404.component';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { ProvinciasSelectComponent } from './provincias-select/provincias-select.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'provincias',
    component: ProvinciasSelectComponent,
  },
  {
    path: 'provincias/:nombreProvincia/productos',
    component: ProductosListComponent,
  },
  { path: '**', /* redirectTo: '/home' */ component: P404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

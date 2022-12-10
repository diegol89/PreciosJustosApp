import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvinciasSelectComponent } from './provincias-select/provincias-select.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { HomeComponent } from './home/home.component';
import { P404Component } from './p404/p404.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvinciasSelectComponent,
    ProductosListComponent,
    HomeComponent,
    P404Component,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

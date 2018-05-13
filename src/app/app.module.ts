import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { RouterModule, RouterLink, Routes } from "@angular/router";
import { FormsModule } from '@angular/forms';


import { AjaxService } from './ajax-service/ajax.service';


import { AppComponent } from './app.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetalleComponent } from './pokemon-detalle/pokemon-detalle.component';

const appRoutes: Routes = [
{path: '', component: CuerpoComponent},
{path: 'pokemon', component: PokemonComponent},
{path: 'pokemon/:pokemonID', component: PokemonDetalleComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CuerpoComponent,
    HeaderComponent,
    FooterComponent,
    PokemonComponent,
    PokemonDetalleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false}),
    FormsModule
  ],
  providers: [AjaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }

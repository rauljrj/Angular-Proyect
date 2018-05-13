import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax-service/ajax.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pokemon-detalle',
  templateUrl: './pokemon-detalle.component.html',
  styleUrls: ['./pokemon-detalle.component.css']
})
export class PokemonDetalleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ajax: AjaxService) { }

  public pokemonName;
  public pokemon;
  public pokemonTipos;
  public pokemonStats;
  public pokemonHabilidades;
  public cargados = false;


  ngOnInit() {
    this.route.params.subscribe(parameter => {
      this.pokemonName = parameter['pokemonID'];
      this.mostrarPokemon();

    });
  }
  mostrarPokemon() {
    this.ajax.getPokemon(this.pokemonName).subscribe(datos => {
      this.pokemon = datos;
      this.pokemonTipos = datos.types;
      this.pokemonStats = datos.stats;
      this.pokemonHabilidades = datos.abilities;
      this.cargados = true;
    })
  }


}

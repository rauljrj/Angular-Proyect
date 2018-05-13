import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax-service/ajax.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ajax: AjaxService) { }

  public poketodos;
  public cargados = false;


  ngOnInit() {
      this.ajax.getTodos().subscribe(datos => {
        this.poketodos = datos;
        this.cargados = true;
        console.log(datos);
    });
  }



}

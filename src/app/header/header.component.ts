import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax-service/ajax.service';
import {Router} from "@angular/router";

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public pokemones = '';
  public pokemon: string;

  constructor(private route: Router, public datos: AjaxService) { }

  ngOnInit() {
  }
  enter(codigo, pokemones){
    if(codigo.keyCode == 6){
      this.route.navigateByUrl('/pokemon/' + pokemones);
    }
}
}

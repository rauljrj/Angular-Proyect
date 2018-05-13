import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AjaxService {

  constructor(public ajax: HttpClient) {}

getTodos(): Observable<any>{
  return this.ajax.get("https://pokeapi.co/api/v2/pokemon/");
}


getPokemon(nombre): Observable<any>{
    return this.ajax.get("https://pokeapi.co/api/v2/pokemon/" + nombre.toLowerCase());
}


}

import { MovilesService } from './core/services/moviles.service';
import { Component } from '@angular/core';
import { Movil } from './core/model/movil';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dosMovilesInyeccion2021Prof';
  valor;
  constructor(private movilesService: MovilesService) {}

  public get listaMoviles(): Array<Movil> {
    return this.movilesService.movilesList;
  }
  valorar(movil) {
    this.valor = movil;
  }
}

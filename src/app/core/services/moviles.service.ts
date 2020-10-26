import { Injectable } from '@angular/core';
import { Movil } from '../model/movil';
import { Sistemas } from '../model/sistemas';

@Injectable({
  providedIn: 'root'
})
export class MovilesService {
  private marcas = [
    'sony',
    'xiaomi',
    'apple',
    'lg',
    'alcatel',
    'oppo',
    'samsung',
  ];
  private baterias = [3000, 4000, 1500, 2000, 500, 6000, 2323];
  private sos = [
    Sistemas.android,
    Sistemas.android,
    Sistemas.ios,
    Sistemas.android,
    Sistemas.android,
    Sistemas.android,
    Sistemas.android,
  ];
  private cincoG = [false, true, true, false, false, true, true];
  private precios = [450, 230, 1450, 12, 1, 122, 332.45];
  private pantallas = [4.3, 6.2, 5.5, 2, 1, 7.9, 6.122312];
  private _movilesList: Array<Movil>;
  constructor() {
    this._movilesList = [];
    for (let index = 0; index < this.marcas.length; index++) {
      this.movilesList.push(
        new Movil(
          this.pantallas[index],
          this.baterias[index],
          this.sos[index],
          this.marcas[index],
          this.cincoG[index],
          this.precios[index]
        )
      );
    }
  }
  public get movilesList(){
    return this._movilesList;
  }
}

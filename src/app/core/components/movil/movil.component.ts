import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movil } from 'src/app/core/model/movil';

@Component({
  selector: 'app-movil',
  templateUrl: './movil.component.html',
  styleUrls: ['./movil.component.css'],
})
export class MovilComponent implements OnInit {
  @Input() movil: Movil;
  @Output() emisor;
  constructor() {
    this.emisor = new EventEmitter();
  }
  emitir() {
    this.emisor.emit(this.movil);
  }
  ngOnInit(): void {}
}

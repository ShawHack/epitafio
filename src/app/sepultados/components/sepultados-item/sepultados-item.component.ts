import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Sepultado} from '../../models/sepultados.model';

@Component({
  selector: 'app-sepultados-item',
  templateUrl: './sepultados-item.component.html',
  styleUrls: ['./sepultados-item.component.scss'],
})
export class SepultadosItemComponent  {

  @Input() sepultado: Sepultado;
  @Output() done = new EventEmitter<Sepultado>();
  @Output() update = new EventEmitter<Sepultado>();
  @Output() delete = new EventEmitter<Sepultado>();
}

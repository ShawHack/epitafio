import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sepultado} from '../../models/sepultados.model';
import { SepultadosService } from '../../services/sepultados.service';
import {NavController} from '@ionic/angular';
import {OverlayService} from 'src/app/core/services/overlay.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-sepultado-pesquisa',
  templateUrl: './sepultado-pesquisa.page.html',
  styleUrls: ['./sepultado-pesquisa.page.scss'],
})
export class SepultadoPesquisaPage implements OnInit  {
  
 
  sepultados$: Observable <Sepultado[]>;
  
  constructor(private overlayservice: OverlayService , private navCtrl: NavController, private sepultadosService: SepultadosService ) { }

  ngOnInit(): void {
   
    
  }
  
}




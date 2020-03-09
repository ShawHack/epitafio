import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SepultadoPesquisaPageRoutingModule } from './sepultado-pesquisa-routing.module';

import { SepultadoPesquisaPage } from './sepultado-pesquisa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SepultadoPesquisaPageRoutingModule
  ],
  declarations: [SepultadoPesquisaPage]
})
export class SepultadoPesquisaPageModule {}

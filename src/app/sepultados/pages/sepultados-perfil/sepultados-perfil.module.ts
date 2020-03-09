import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SepultadosPerfilPageRoutingModule } from './sepultados-perfil-routing.module';

import { SepultadosPerfilPage } from './sepultados-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SepultadosPerfilPageRoutingModule
  ],
  declarations: [SepultadosPerfilPage]
})
export class SepultadosPerfilPageModule {}

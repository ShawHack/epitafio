import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SepultadoPesquisaPageRoutingModule } from './sepultado-pesquisa-routing.module';
import { SepultadoPesquisaPage } from './sepultado-pesquisa.page';
import {ComponentsModule} from '../../components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    IonicModule,
    SepultadoPesquisaPageRoutingModule
  ],
  declarations: [SepultadoPesquisaPage]
})
export class SepultadoPesquisaPageModule {}

import { NgModule } from '@angular/core';
import { SepultadosListPageRoutingModule } from './sepultados-list-routing.module';
import { SepultadosListPage } from './sepultados-list.page';
import { SharedModule } from 'src/app/shared/shared.module';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    SepultadosListPageRoutingModule
  ],
  declarations: [SepultadosListPage]
})
export class SepultadosListPageModule {}

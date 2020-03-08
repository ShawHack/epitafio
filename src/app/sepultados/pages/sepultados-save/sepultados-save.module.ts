import { NgModule } from '@angular/core';


import { SepultadosSavePageRoutingModule } from './sepultados-save-routing.module';

import { SepultadosSavePage } from './sepultados-save.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    SepultadosSavePageRoutingModule
  ],
  declarations: [SepultadosSavePage]
})
export class SepultadosSavePageModule {}

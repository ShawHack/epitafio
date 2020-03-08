import { NgModule } from '@angular/core';
import {SepultadosItemComponent  } from './sepultados-item/sepultados-item.component';
import {SharedModule} from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    SepultadosItemComponent 
  ],
  imports: [
    SharedModule
   ],
  exports: [
    SepultadosItemComponent 
  ]
})
export class ComponentsModule { }

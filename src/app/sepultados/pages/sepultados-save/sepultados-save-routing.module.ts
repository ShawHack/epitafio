import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SepultadosSavePage } from './sepultados-save.page';

const routes: Routes = [
  {
    path: '',
    component: SepultadosSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SepultadosSavePageRoutingModule {}

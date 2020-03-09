import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SepultadoPesquisaPage } from './sepultado-pesquisa.page';

const routes: Routes = [
  {
    path: '',
    component: SepultadoPesquisaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SepultadoPesquisaPageRoutingModule {}

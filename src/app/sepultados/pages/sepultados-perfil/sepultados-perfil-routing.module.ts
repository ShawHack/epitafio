import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SepultadosPerfilPage } from './sepultados-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: SepultadosPerfilPage
  },
 
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SepultadosPerfilPageRoutingModule {}

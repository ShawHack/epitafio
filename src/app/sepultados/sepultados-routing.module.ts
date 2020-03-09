import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'create',
        loadChildren: () => import('./pages/sepultados-save/sepultados-save.module').then( m => m.SepultadosSavePageModule)
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('./pages/sepultados-save/sepultados-save.module').then( m => m.SepultadosSavePageModule)
      },
      {
        path: '',
        loadChildren: () => import('./pages/sepultados-list/sepultados-list.module').then( m => m.SepultadosListPageModule)
      }
      ]
  },
  {
    path: 'sepultados-perfil',
    loadChildren: () => import('./pages/sepultados-perfil/sepultados-perfil.module').then( m => m.SepultadosPerfilPageModule)
  },
  {
    path: 'sepultado-pesquisa',
    loadChildren: () => import('./pages/sepultado-pesquisa/sepultado-pesquisa.module').then( m => m.SepultadoPesquisaPageModule)
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SepultadosRoutingModule { }

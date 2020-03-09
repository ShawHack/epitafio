import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'pesquisar', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'sepultados',
    loadChildren: () => import('./sepultados/sepultados.module').then( m => m.SepultadosModule), canLoad: [AuthGuard]
  },
{ 
  path: 'pesquisar',
  // tslint:disable-next-line: max-line-length
  loadChildren: () => import('./sepultados/pages/sepultado-pesquisa/sepultado-pesquisa.module').then( m => m.SepultadoPesquisaPageModule )
},
{ 
path: 'perfil',
  // tslint:disable-next-line: max-line-length
  loadChildren: () => import('./sepultados/pages/sepultados-perfil/sepultados-perfil.module').then( m => m.SepultadosPerfilPageModule )
},

  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

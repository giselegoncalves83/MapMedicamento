import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'farmacia',
    loadChildren: () => import('./pages/farmacia/farmacia.module').then( m => m.FarmaciaPageModule)
  },
  {
    path: 'medicamento',
    loadChildren: () => import('./pages/medicamento/medicamento.module').then( m => m.MedicamentoPageModule)
  },   {
    path: 'especialidade',
    loadChildren: () => import('./pages/especialidade/especialidade.module').then( m => m.EspecialidadePageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'view-employee',
    loadChildren: () => import('./pages/view-employee/view-employee.module').then( m => m.ViewEmployeePageModule)
  },
  {
    path: 'form-employee',
    loadChildren: () => import('./pages/form-employee/form-employee.module').then( m => m.FormEmployeePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

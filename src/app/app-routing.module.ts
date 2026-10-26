


// app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'a01',
    loadChildren: () => import('./a-ts-demos/a01/a01.module').then( m => m.A01PageModule)
  },
  {
    path: 'a02',
    loadChildren: () => import('./a-ts-demos/a02/a02.module').then( m => m.A02PageModule)
  },
  {
    path: 'a03',
    loadChildren: () => import('./a-ts-demos/a03/a03.module').then( m => m.A03PageModule)
  },
  {
    path: 'a04',
    loadChildren: () => import('./a-ts-demos/a04/a04.module').then( m => m.A04PageModule)
  },
  {
    path: 'b01',
    loadChildren: () => import('./b-angular-demos/b01/b01.module').then( m => m.B01PageModule)
  },
  {
    path: 'b02',
    loadChildren: () => import('./b-angular-demos/b02/b02.module').then( m => m.B02PageModule)
  },
  {
    path: 'b03',
    loadChildren: () => import('./b-angular-demos/b03/b03.module').then( m => m.B03PageModule)
  },
  {
    path: 'b04',
    loadChildren: () => import('./b-angular-demos/b04/b04.module').then( m => m.B04PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

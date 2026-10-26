import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1', //a-ts-demos
        loadChildren: () => import('../a-ts-demos/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2', //b-angular-demos
        loadChildren: () => import('../b-angular-demos/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3', //c-ionic-demos
        loadChildren: () => import('../c-ionic-demos/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4', //d-bdmap-demos
        loadChildren: () => import('../d-bdmap-demos/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

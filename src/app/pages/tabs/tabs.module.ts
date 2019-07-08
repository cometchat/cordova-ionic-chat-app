import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children : [
      {
         path: 'tab1',
         loadChildren: '../tab1/tab1.module#Tab1PageModule'
      },
      {
          path: 'tab2',
          loadChildren: '../tab2/tab2.module#Tab2PageModule'
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab1',
    pathMatch: 'full'
  },
  { path: 'blocked-users', loadChildren: '../../blocked-users/blocked-users.module#BlockedUsersPageModule' },
  { path: 'redirectToTabs', redirectTo: 'tabs/tab1', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}

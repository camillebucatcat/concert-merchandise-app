import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../pages/search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../pages/cart/cart.module').then(m => m.CartPageModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('../pages/messages/messages.module').then(m => m.MessagesPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
      },
      {
        path: 'for-delivery',
        loadChildren: () => import('../pages/for-delivery/for-delivery.module').then(m => m.ForDeliveryPageModule)
      },
      {
        path: 'preparing',
        loadChildren: () => import('../pages/preparing/preparing.module').then(m => m.PreparingPageModule)
      },
      {
        path: 'received',
        loadChildren: () => import('../pages/received/received.module').then(m => m.ReceivedPageModule)
      },
      {
        path: 'pending',
        loadChildren: () => import('../pages/pending/pending.module').then(m => m.PendingPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'order-status',
        loadChildren: () => import('../pages/order-status/order-status.module').then(m => m.OrderStatusPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/cart',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

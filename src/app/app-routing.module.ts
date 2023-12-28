import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'logo-animation',
    pathMatch: 'full'
  },
  {
    path: 'logo-animation',
    loadChildren: () => import('./pages/logo-animation/logo-animation.module').then( m => m.LogoAnimationPageModule)
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./pages/splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'featured-band',
    loadChildren: () => import('./pages/featured-band/featured-band.module').then( m => m.FeaturedBandPageModule)
  },
  {
    path: 'order-confirm',
    loadChildren: () => import('./pages/order-confirm/order-confirm.module').then( m => m.OrderConfirmPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'order-status',
    loadChildren: () => import('./pages/order-status/order-status.module').then( m => m.OrderStatusPageModule)
  },
  {
    path: 'product-details',
    loadChildren: () => import('./pages/product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: 'place-order',
    loadChildren: () => import('./pages/place-order/place-order.module').then( m => m.PlaceOrderPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'order-details',
    loadChildren: () => import('./pages/order-details/order-details.module').then( m => m.OrderDetailsPageModule)
  },
  {
    path: 'pending',
    loadChildren: () => import('./pages/pending/pending.module').then( m => m.PendingPageModule)
  },
  {
    path: 'preparing',
    loadChildren: () => import('./pages/preparing/preparing.module').then( m => m.PreparingPageModule)
  },
  {
    path: 'for-delivery',
    loadChildren: () => import('./pages/for-delivery/for-delivery.module').then( m => m.ForDeliveryPageModule)
  },
  {
    path: 'received',
    loadChildren: () => import('./pages/received/received.module').then( m => m.ReceivedPageModule)
  },
  {
    path: 'delivery-details',
    loadChildren: () => import('./pages/delivery-details/delivery-details.module').then( m => m.DeliveryDetailsPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./pages/messages/messages.module').then( m => m.MessagesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

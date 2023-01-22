import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/intro/intro.module').then(m => m.IntroPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'subscription',
    loadChildren: () => import('./pages/subscription/subscription.module').then( m => m.SubscriptionPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./pages/login/otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'select-brand',
    loadChildren: () => import('./pages/login/select-brand/select-brand.module').then( m => m.SelectBrandPageModule)
  },
  {
    path: 'select-car',
    loadChildren: () => import('./pages/login/select-car/select-car.module').then( m => m.SelectCarPageModule)
  },
  {
    path: 'select-city',
    loadChildren: () => import('./pages/login/select-city/select-city.module').then( m => m.SelectCityPageModule)
  },  {
    path: 'vehicles-list',
    loadChildren: () => import('./pages/vehicle/vehicles-list/vehicles-list.module').then( m => m.VehiclesListPageModule)
  },
  {
    path: 'vehicle-health-report',
    loadChildren: () => import('./pages/vehicle/vehicle-health-report/vehicle-health-report.module').then( m => m.VehicleHealthReportPageModule)
  },
  {
    path: 'car-services',
    loadChildren: () => import('./pages/car/car-services/car-services.module').then( m => m.CarServicesPageModule)
  },
  {
    path: 'service-order-confirmation',
    loadChildren: () => import('./pages/car/service-order-confirmation/service-order-confirmation.module').then( m => m.ServiceOrderConfirmationPageModule)
  },
  {
    path: 'service-book-message',
    loadChildren: () => import('./pages/car/service-book-message/service-book-message.module').then( m => m.ServiceBookMessagePageModule)
  },
  {
    path: 'ondemand',
    loadChildren: () => import('./pages/car-wash/ondemand/ondemand.module').then( m => m.OndemandPageModule)
  },
  {
    path: 'order-confirmation',
    loadChildren: () => import('./pages/car-wash/order-confirmation/order-confirmation.module').then( m => m.OrderConfirmationPageModule)
  },
  {
    path: 'ondemand-summary',
    loadChildren: () => import('./pages/car-wash/ondemand-summary/ondemand-summary.module').then( m => m.OndemandSummaryPageModule)
  },
  {
    path: 'ondemand-order-summary',
    loadChildren: () => import('./pages/car-wash/ondemand-order-summary/ondemand-order-summary.module').then( m => m.OndemandOrderSummaryPageModule)
  },
  {
    path: 'ondemand-package',
    loadChildren: () => import('./pages/car-wash/ondemand-package/ondemand-package.module').then( m => m.OndemandPackagePageModule)
  },
  {
    path: 'ondemand-package-summary',
    loadChildren: () => import('./pages/car-wash/ondemand-package-summary/ondemand-package-summary.module').then( m => m.OndemandPackageSummaryPageModule)
  },
  {
    path: 'ondemand-package-order',
    loadChildren: () => import('./pages/car-wash/ondemand-package-order/ondemand-package-order.module').then( m => m.OndemandPackageOrderPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./pages/global/reviews/reviews.module').then( m => m.ReviewsPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/global/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'ondemand-package-details',
    loadChildren: () => import('./pages/car-wash/ondemand-package-details/ondemand-package-details.module').then( m => m.OndemandPackageDetailsPageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./pages/global/address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'repair-quote',
    loadChildren: () => import('./pages/global/repair-quote/repair-quote.module').then( m => m.RepairQuotePageModule)
  },
  {
    path: 'repair-quote-summary',
    loadChildren: () => import('./pages/global/repair-quote-summary/repair-quote-summary.module').then( m => m.RepairQuoteSummaryPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./pages/global/wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'wallet-summary',
    loadChildren: () => import('./pages/global/wallet-summary/wallet-summary.module').then( m => m.WalletSummaryPageModule)
  },
  {
    path: 'mechanical-order-summary',
    loadChildren: () => import('./pages/car/mechanical-order-summary/mechanical-order-summary.module').then( m => m.MechanicalOrderSummaryPageModule)
  },
  {
    path: 'subscription-list',
    loadChildren: () => import('./pages/car/subscription-list/subscription-list.module').then( m => m.SubscriptionListPageModule)
  },
  {
    path: 'order-tracking',
    loadChildren: () => import('./pages/car/order-tracking/order-tracking.module').then( m => m.OrderTrackingPageModule)
  },
  {
    path: 'ondemand-order-tracking',
    loadChildren: () => import('./pages/car-wash/ondemand-order-tracking/ondemand-order-tracking.module').then( m => m.OndemandOrderTrackingPageModule)
  },
  {
    path: 'ondemand-wash-coupons',
    loadChildren: () => import('./pages/car-wash/ondemand-wash-coupons/ondemand-wash-coupons.module').then( m => m.OndemandWashCouponsPageModule)
  },
  {
    path: 'refer-earn',
    loadChildren: () => import('./pages/global/refer-earn/refer-earn.module').then( m => m.ReferEarnPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/global/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/global/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/global/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'user-details',
    loadChildren: () => import('./pages/global/user-details/user-details.module').then( m => m.UserDetailsPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './home/category/category.component';
import { ShopComponent } from './home/shop/shop.component';
import { RestaurantMenuComponent } from './home/restaurant-menu/restaurant-menu.component';
import { ShopMenuComponent } from './home/shop-menu/shop-menu.component';
import { OrdersComponent } from './home/orders/orders.component';
import { UsersComponent } from './home/users/users.component';
import { PincodesComponent } from './home/pincodes/pincodes.component';
import { DeliveryBoysComponent } from './home/delivery-boys/delivery-boys.component';
import { AddCategoryComponent } from './home/category/add-category/add-category.component';
import { EditCategoryComponent } from './home/category/edit-category/edit-category.component';
import { AddDeliveryBoysComponent } from './home/delivery-boys/add-delivery-boys/add-delivery-boys.component';
import { EditDeliveryBoysComponent } from './home/delivery-boys/edit-delivery-boys/edit-delivery-boys.component';
import { AddPincodesComponent } from './home/pincodes/add-pincodes/add-pincodes.component';
import { EditPincodesComponent } from './home/pincodes/edit-pincodes/edit-pincodes.component';
import { AddRestaurantMenuComponent } from './home/restaurant-menu/add-restaurant-menu/add-restaurant-menu.component';
import { EditRestaurantMenuComponent } from './home/restaurant-menu/edit-restaurant-menu/edit-restaurant-menu.component';
import { AddShopComponent } from './home/shop/add-shop/add-shop.component';
import { EditShopComponent } from './home/shop/edit-shop/edit-shop.component';
import { AddShopMenuComponent } from './home/shop-menu/add-shop-menu/add-shop-menu.component';
import { EditShopMenuComponent } from './home/shop-menu/edit-shop-menu/edit-shop-menu.component';
import { GeneralMenuComponent } from './home/general-menu/general-menu.component';
import { GeneralShopMenuComponent } from './home/general-shop-menu/general-shop-menu.component';
import { AddGeneralMenuComponent } from './home/general-menu/add-general-menu/add-general-menu.component';
import { EditGeneralMenuComponent } from './home/general-menu/edit-general-menu/edit-general-menu.component';
import { AddGeneralShopMenuComponent } from './home/general-shop-menu/add-general-shop-menu/add-general-shop-menu.component';
import { EditGeneralShopMenuComponent } from './home/general-shop-menu/edit-general-shop-menu/edit-general-shop-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OffersComponent } from './offers/offers.component';
import { SettingsComponent } from './settings/settings.component';
import { AddOffersComponent } from './offers/add-offers/add-offers.component';
import { EditOffersComponent } from './offers/edit-offers/edit-offers.component';
import { AddSettingsComponent } from './settings/add-settings/add-settings.component';
import { EditSettingsComponent } from './settings/edit-settings/edit-settings.component';
import { MasteradminphonenumberComponent } from './settings/masteradminphonenumber/masteradminphonenumber.component';
import { WalletpointsComponent } from './settings/walletpoints/walletpoints.component';
import { ReportsComponent } from './reports/reports.component';
import { SalesComponent } from './reports/sales/sales.component';
import { PurchaseComponent } from './reports/purchase/purchase.component';
import { DeliveryComponent } from './reports/delivery/delivery.component';
import { CoursetypeComponent } from './coursetype/coursetype.component';
import { AddCoursetypeComponent } from './coursetype/add-coursetype/add-coursetype.component';
import { EditCoursetypeComponent } from './coursetype/edit-coursetype/edit-coursetype.component';
import { HttpClientModule } from '@angular/common/http';
import { ShopAdminMenuNameComponent } from './shop_admin_section/shop-admin-menu-name/shop-admin-menu-name.component';
import { ShopAdminOffersComponent } from './shop_admin_section/shop-admin-offers/shop-admin-offers.component';
import { ShopAdminOrdersComponent } from './shop_admin_section/shop-admin-orders/shop-admin-orders.component';
import { ShopAdminReportsComponent } from './shop_admin_section/shop-admin-reports/shop-admin-reports.component';
import { AddShopAdminMenuNameComponent } from './shop_admin_section/shop-admin-menu-name/add-shop-admin-menu-name/add-shop-admin-menu-name.component';
import { EditShopAdminMenuNameComponent } from './shop_admin_section/shop-admin-menu-name/edit-shop-admin-menu-name/edit-shop-admin-menu-name.component';
import { AddShopAdminOffersComponent } from './shop_admin_section/shop-admin-offers/add-shop-admin-offers/add-shop-admin-offers.component';
import { EditShopAdminOffersComponent } from './shop_admin_section/shop-admin-offers/edit-shop-admin-offers/edit-shop-admin-offers.component';
import { SalesReportComponent } from './shop_admin_section/shop-admin-reports/sales-report/sales-report.component';
import { ApprovalRequestComponent } from './home/approval-request/approval-request.component';
import { MenuApprovalComponent } from './home/approval-request/menu-approval/menu-approval.component';
import { PriceUpdatorComponent } from './settings/price-updator/price-updator.component';
import { AddPriceUpdatorComponent } from './settings/price-updator/add-price-updator/add-price-updator.component';
import { EditPriceUpdatorComponent } from './settings/price-updator/edit-price-updator/edit-price-updator.component';
import { PreOrdersComponent } from './home/pre-orders/pre-orders.component';
import { AddPreOrdersComponent } from './home/pre-orders/add-pre-orders/add-pre-orders.component';
import { EditPreOrdersComponent } from './home/pre-orders/edit-pre-orders/edit-pre-orders.component';
import { TopDealsComponent } from './top-deals/top-deals.component';
import { AddTopDealsComponent } from './top-deals/add-top-deals/add-top-deals.component';
import { EditTopDealsComponent } from './top-deals/edit-top-deals/edit-top-deals.component';
// import { AddPriceUpdatorComponent } from './settings/add-price-updator/add-price-updator.component';
// import { EditPriceUpdatorComponent } from './settings/edit-price-updator/edit-price-updator.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    CategoryComponent,
    ShopComponent,
    RestaurantMenuComponent,
    ShopMenuComponent,
    OrdersComponent,
    UsersComponent,
    PincodesComponent,
    DeliveryBoysComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    AddDeliveryBoysComponent,
    EditDeliveryBoysComponent,
    AddPincodesComponent,
    EditPincodesComponent,
    AddRestaurantMenuComponent,
    EditRestaurantMenuComponent,
    AddShopComponent,
    EditShopComponent,
    AddShopMenuComponent,
    EditShopMenuComponent,
    GeneralMenuComponent,
    GeneralShopMenuComponent,
    AddGeneralMenuComponent,
    EditGeneralMenuComponent,
    AddGeneralShopMenuComponent,
    EditGeneralShopMenuComponent,
    OffersComponent,
    SettingsComponent,
    AddOffersComponent,
    EditOffersComponent,
    AddSettingsComponent,
    EditSettingsComponent,
    MasteradminphonenumberComponent,
    WalletpointsComponent,
    ReportsComponent,
    SalesComponent,
    PurchaseComponent,
    DeliveryComponent,
    CoursetypeComponent,
    AddCoursetypeComponent,
    EditCoursetypeComponent,
    ShopAdminMenuNameComponent,
    ShopAdminOffersComponent,
    ShopAdminOrdersComponent,
    ShopAdminReportsComponent,
    AddShopAdminMenuNameComponent,
    EditShopAdminMenuNameComponent,
    AddShopAdminOffersComponent,
    EditShopAdminOffersComponent,
    SalesReportComponent,
    ApprovalRequestComponent,
    MenuApprovalComponent,
    PriceUpdatorComponent,
    AddPriceUpdatorComponent,
    EditPriceUpdatorComponent,
    PreOrdersComponent,
    AddPreOrdersComponent,
    EditPreOrdersComponent,
    TopDealsComponent,
    AddTopDealsComponent,
    EditTopDealsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,      
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

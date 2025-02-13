import { FilterPipe } from './pipes/filter.pipe';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CartsComponent } from './components/carts/carts.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FavoriteComponent } from './components/favorite/favorite.component';

import { AuthModule } from '@auth0/auth0-angular';
import { MatStepperModule } from '@angular/material/stepper';

import { DashbordNavComponent } from './components/dashbord-nav/dashbord-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './components/dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [{ path: 'dashboard', component: DashComponent }];

import { environment as env } from '../environments/environment';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { NavToLoginComponent } from './components/nav-to-login/nav-to-login.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MystoreComponent } from './components/mystore/mystore.component';
import { CustomersComponent } from './customers/customers.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SortingPipe } from './pipes/sorting.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';
@NgModule({
  exports: [RouterModule],
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CartsComponent,
    RegisterComponent,
    ProductsComponent,
    LoginComponent,
    ErrorComponent,
    AboutComponent,
    ContactComponent,
    ProductDetailsComponent,
    ToolbarComponent,
    LogoutComponent,

    FavoriteComponent,

    DashbordNavComponent,
    DashComponent,
    CardComponent,
    OrdersTableComponent,
    OrdersComponent,
    LoginButtonComponent,
    NavToLoginComponent,
    LogoutButtonComponent,
    LoadingComponent,
    MystoreComponent,
    CustomersComponent,
    ProfileComponent,
    FilterPipe,
    SortingPipe,
    CategoryDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatStepperModule,
    MatCardModule,
    MatSelectModule,
    NgxScrollTopModule,

    AuthModule.forRoot({
      ...env.auth,
    }),
    NgbModule,

    // [RouterModule.forRoot(routes)MatTableModuleMatPaginatorModuleMatSortModule]
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

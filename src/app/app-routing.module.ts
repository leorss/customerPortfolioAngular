import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { ListCustomerComponent } from './component/list-customer/list-customer.component';
import { CustomerComponent } from './component/customer/customer.component';
import { ErrorComponent } from './component/error/error.component';

const routes: Routes = [
  { path: '', component: LoginComponent, }, //canActivate, RouteGuardService
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'welcome', component: WelcomeComponent},
  { path: 'customers', component: ListCustomerComponent},
  { path: 'customer', component: CustomerComponent},
  { path: 'customer/:id', component: CustomerComponent},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

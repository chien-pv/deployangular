import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailComponent } from './detail/detail.component';
import { RegisterComponent } from './register/register.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { jwtDecode } from 'jwt-decode';

const canActivateProduct: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const token: any = localStorage.getItem('token');
  const payload: any = jwtDecode(token);
  const role = payload.role;
  const roleCheck = route.data['role'];
  console.log(payload);
  const jwtHelper = new JwtHelperService();
  if (token === null) return false;
  return role == roleCheck && !jwtHelper.isTokenExpired(token);
};

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'product',
    component: ProductComponent,
    canActivate: [canActivateProduct],
    data: { role: 1 },
  },
  { path: 'product/detail', component: DetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

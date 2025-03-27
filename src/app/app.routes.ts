import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { LibretasComponent } from './pages/libretas/libretas.component';
import { RopaComponent } from './pages/ropa/ropa.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';
import { HogarComponent } from './pages/hogar/hogar.component';
import { LoginComponent } from './pages/login/login.component';
import { AdmiComponent } from './pages/admi/admi.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { CarritoComponent } from './pages/carrito/carrito.component';


export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "", component: HomeComponent},
    {path: "acerca", component: AcercaComponent},
    {path: "tienda", component: TiendaComponent},
    {path: "libretas", component: LibretasComponent},
    {path: "ropa", component:RopaComponent},
    {path: "accesorios", component:AccesoriosComponent},
    {path: "hogar", component:HogarComponent},
    {path: "login", component:LoginComponent},
    {path: "administracion", component: AdmiComponent},
    {path: "checkout", component: CheckOutComponent},
    {path: "carrito", component: CarritoComponent},
    { path: '**', redirectTo: 'tienda' }
];

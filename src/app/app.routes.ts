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
import { InfoCompraComponent } from './pages/info-compra/info-compra.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { GaleryComponent } from './pages/galery/galery.component';
import { PrincipalTrucupeyComponent } from './pages/principal-trucupey/principal-trucupey.component';
import { AdmiMensajesComponent } from './pages/admi-mensajes/admi-mensajes.component';


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
    {path: "informacion-adicional", component: InfoCompraComponent},
    {path: "contacto", component: ContactoComponent},
    {path: "galery", component: GaleryComponent},
    {path: "principalAdmi", component: PrincipalTrucupeyComponent},
    {path: "admi-mensajes", component: AdmiMensajesComponent},
    { path: '**', redirectTo: 'tienda' }
];

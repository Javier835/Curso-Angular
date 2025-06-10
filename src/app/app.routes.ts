import { Routes } from '@angular/router';

import { Login } from './components/login/login';
import { Componentes } from './components/componentes/componentes';
import { Inicio } from './components/inicio/inicio';
import { Interpolacion } from './components/interpolacion/interpolacion';
import { DirectivasEstructurales } from './components/directivas-estructurales/directivas-estructurales';
import { ComunicacionDeComponentes } from './components/comunicacion-de-componentes/comunicacion-de-componentes';
import { Perritos } from './components/perritos/perritos';
import { LayoutComponent } from './components/layout-component/layout-component';

export const routes: Routes = [
  { path: 'login', component: Login },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: Inicio },
      { path: 'inicio', component: Inicio },
      { path: 'componentes', component: Componentes },
      { path: 'interpolacion', component: Interpolacion },
      { path: 'directivasestructurales', component: DirectivasEstructurales },
      { path: 'comunicaciondecomponentes', component: ComunicacionDeComponentes },
      { path: 'perritos', component: Perritos },
    ]
  },
];

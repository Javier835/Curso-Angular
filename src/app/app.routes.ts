import { Routes } from '@angular/router';
import { App } from './app';
import { Componentes } from './components/componentes/componentes';
import { Inicio } from './components/inicio/inicio';
import { Interpolacion } from './components/interpolacion/interpolacion';

export const routes: Routes = [
    {path:'',component: Inicio, title: 'Inicio'},
    {path:'inicio',component: Inicio, title: 'Inicio'},
    {path:'componentes',component: Componentes, title: 'Componentes'},
    {path:'interpolacion',component: Interpolacion, title: 'Interpolación'},
];

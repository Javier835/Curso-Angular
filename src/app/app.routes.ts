import { Routes } from '@angular/router';
import { App } from './app';
import { Componentes } from './components/componentes/componentes';
import { Inicio } from './components/inicio/inicio';
import { Interpolacion } from './components/interpolacion/interpolacion';
import { DirectivasEstructurales } from './components/directivas-estructurales/directivas-estructurales';
import { ComunicacionDeComponentes } from './components/comunicacion-de-componentes/comunicacion-de-componentes';
import { Perritos } from './components/perritos/perritos';


export const routes: Routes = [
    
    {path:'',component: Inicio, title: 'Inicio'},
    {path:'inicio',component: Inicio, title: 'Inicio'},
    {path:'componentes',component: Componentes, title: 'Componentes'},
    {path:'interpolacion',component: Interpolacion, title: 'Interpolación'},
    {path:'directivasestructurales',component: DirectivasEstructurales, title: 'Directivas Estructurales'},
    {path:'comunicaciondecomponentes',component: ComunicacionDeComponentes, title: 'Comunicación de Componentes'},
    {path:'perritos',component: Perritos, title: 'Perritos'},
];

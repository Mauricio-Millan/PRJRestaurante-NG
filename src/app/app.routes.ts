import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuItemFullComponent } from './menu-item-full/menu-item-full.component';

export const routes: Routes = [
    {path: '', component: InicioComponent, title: 'Inicio'},
    {path: 'platos', component : MenuComponent, title: 'Catalogo de menus'},
    {path: 'platos/:id', component : MenuItemFullComponent, title: 'menu Full' },
];

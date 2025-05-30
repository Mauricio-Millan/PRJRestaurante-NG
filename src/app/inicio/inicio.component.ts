import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { FormsModule } from '@angular/forms';
import { MenuserviceService, ObjMenu } from '../servicios/menuservice.service';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule, MenuItemComponent, FormsModule ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  menulist: ObjMenu[] = [];
  filtromenu: string = '';
  filtromenulist: ObjMenu[] = [];

    servicioMenu: MenuserviceService = inject(MenuserviceService);
  constructor() {
       this.servicioMenu.getAllProducts().then((productslist: ObjMenu[]) => {
      this.menulist = productslist;
      this.filtromenulist = productslist;})
  }

  getRandomPlatos(): ObjMenu[] {
    // Copia la lista para no modificar la original
    const platos = [...this.menulist];
    // Mezcla aleatoriamente el array
    for (let i = platos.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [platos[i], platos[j]] = [platos[j], platos[i]];
    }
    // Devuelve los primeros 8 (o menos si hay menos de 8)
    return platos.slice(0, 8);
  }
}

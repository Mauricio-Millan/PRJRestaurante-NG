import { Component, inject } from '@angular/core';
import { MenuserviceService, ObjMenu } from '../servicios/menuservice.service';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, FormsModule, MenuItemComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  menulist:ObjMenu[] = [];
  filtromenu: string = '';
  filtromenulist:ObjMenu[] = [];

  servicioMenu: MenuserviceService = inject(MenuserviceService);
  constructor() {
       this.servicioMenu.getAllProducts().then((productslist: ObjMenu[]) => {
      this.menulist = productslist;
      this.filtromenulist = productslist;})
  }
  filtrarmenu(text: string) {
    if (!text) {
      this.filtromenulist = this.menulist;
      return;
    }
    this.filtromenulist = this.menulist.filter((menu) =>
      menu?.nombre.toLowerCase().includes(text.toLowerCase())
  )
  }
    // Método para manejar la selección de una marca
  filtrarmenuporCubierto(tipocubierto: string) {
        if (!tipocubierto) {
      this.filtromenulist = this.menulist;
      return;
    }
    this.filtromenulist = this.menulist.filter((menu) =>
      menu?.cubierto.toLowerCase().includes(tipocubierto.toLowerCase())
  )
    // Aquí puedes implementar la lógica para filtrar productos por marca
  }
}
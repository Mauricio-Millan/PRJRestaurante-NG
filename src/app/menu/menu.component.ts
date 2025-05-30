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
  menulist: ObjMenu[] = [];
  filtromenu: string = '';
  filtromenulist: ObjMenu[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 9;

  // creamos un objeto de cetegoría para filtrar
  tipo: {nombre: string}[] = [
    { nombre: 'Mariscos' },
    { nombre: 'Carnes' },
    { nombre: 'Italiana' },
    { nombre: 'Rápida' },
    {nombre: 'Tradicional' },
    {nombre: 'Fusión' },
    {nombre: 'Sopas' },
    {nombre: 'Parrilla' },
    {nombre: 'Repostería' },
  ]
  tipocubierto: {nombrecubierto: string }[] = [
    { nombrecubierto: 'Plato de fondo' },
    { nombrecubierto: 'Entrada' },
    { nombrecubierto: 'Postres' },
    { nombrecubierto: 'Bebida' }
  ]

  servicioMenu: MenuserviceService = inject(MenuserviceService);
  constructor() {
       this.servicioMenu.getAllProducts().then((productslist: ObjMenu[]) => {
      this.menulist = productslist;
      this.filtromenulist = productslist;})
  }
  get paginatedMenus(): ObjMenu[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filtromenulist.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.filtromenulist.length / this.itemsPerPage);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  // Método para filtrar por nombre
  filtrarmenunombre(text: string) {
    if (!text) {
      this.filtromenulist = this.menulist;
      return;
    }
    this.filtromenulist = this.menulist.filter((menu) =>
      menu?.nombre.toLowerCase().includes(text.toLowerCase())
  )
  this.currentPage = 1;
  }
  // Método para filtrar por tipo
  filtrarmenuporTipo(tipoplato: string) {
        if (!tipoplato) {
      this.filtromenulist = this.menulist;
      return;
    }
    this.filtromenulist = this.menulist.filter((menu) =>
      menu?.tipo.toLowerCase().includes(tipoplato.toLowerCase())
  );
  this.currentPage = 1;
  }
  // Método para manejar la selección de un cubierto
  filtrarmenuporCubierto(tipocubierto: string) {
  if (!tipocubierto) {
    this.filtromenulist = this.menulist;
    return;
  }

  this.filtromenulist = this.menulist.filter((menu) =>
    menu?.cubiertos && menu.cubiertos.toLowerCase().includes(tipocubierto.toLowerCase())
  );
    console.log(this.filtromenulist, "datos obtenidos filtrados por cubierto");
    this.currentPage = 1;
}
}
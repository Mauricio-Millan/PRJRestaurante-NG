import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuserviceService, ObjMenu } from '../servicios/menuservice.service';

@Component({
  selector: 'app-menu-item-full',
  imports: [ CommonModule],
  templateUrl: './menu-item-full.component.html',
  styleUrl: './menu-item-full.component.scss'
})
export class MenuItemFullComponent {
 route: ActivatedRoute = inject(ActivatedRoute);
 menuservicio = inject(MenuserviceService);

  menu: ObjMenu | undefined;
 constructor  () {

   const menuid = parseInt(this.route.snapshot.params['id'], 10);
   this.menuservicio.getProductsbyID(menuid).then((menu) => {
    this.menu = menu;
    console.log("menu seleccionado: ", this.menu);
 });

}
}

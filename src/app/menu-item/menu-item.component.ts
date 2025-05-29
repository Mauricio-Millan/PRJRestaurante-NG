import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ObjMenu } from '../servicios/menuservice.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent implements OnInit {
  @Input() menu!: ObjMenu; // Define la propiedad producto como obligatoria
  @Input() filtromenu: string = ''; // Define la propiedad filtroproducto como opcional
  ngOnInit(): void {
    console.log('Menu recibido:', this.menu);
  }
}

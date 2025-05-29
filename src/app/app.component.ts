import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FoooterComponent } from './foooter/foooter.component';
import { InicioComponent } from './inicio/inicio.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FoooterComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PRJRestaurante-JS-NG';
}

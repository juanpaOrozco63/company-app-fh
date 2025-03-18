import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JpoSideMenuComponent, TitleColor} from 'jpo-side-menu'

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet,JpoSideMenuComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export default class AdminLayoutComponent {
  isAuthenticated = signal(false);
  titleColorReference = TitleColor;

  onLogin()
  {
    this.isAuthenticated.set(true);
  } 
  onLogout()
  {
    this.isAuthenticated.set(false);
  }
}

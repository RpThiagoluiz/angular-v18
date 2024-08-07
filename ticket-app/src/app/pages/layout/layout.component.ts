import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { localStorageKey } from '../../utils/localStorageKey';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  router = inject(Router)

  onLogOff() {
    localStorage.removeItem(localStorageKey)
    this.router.navigateByUrl('login')
  }
}

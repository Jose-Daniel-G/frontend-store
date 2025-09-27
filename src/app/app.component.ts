import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/ui/header/header.component';
import { LoginComponent } from './auth/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,RouterLink, LoginComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'frontend-store';
}

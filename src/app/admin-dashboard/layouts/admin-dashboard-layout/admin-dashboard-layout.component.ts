import { AuthService } from '@auth/services/auth.service';
import { Component, computed, inject } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-admin-dashboard-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './admin-dashboard-layout.component.html',
})
export class AdminDashboardLayoutComponent {
  private route = inject(Router);
  authService = inject(AuthService);

  user = computed(() => this.authService.user());

  logoutAdmin() {
    this.authService.logout();
    this.route.navigateByUrl('/auth/login');
  }
}

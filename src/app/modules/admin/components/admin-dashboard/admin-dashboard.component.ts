import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  role: string | null;

  constructor(private router: Router) {
    this.role = localStorage.getItem('role');
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['/']);
  }
}

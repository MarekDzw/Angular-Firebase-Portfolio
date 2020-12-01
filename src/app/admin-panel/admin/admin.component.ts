import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() { }
  logout() {
    this.authService.logout()
      .then(() => this.router.navigate(['']))
      .catch(err => console.log(err.message));
  }
}

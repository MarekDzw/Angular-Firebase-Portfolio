import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: ''
  }
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.credentials)
      .then(() => this.router.navigate(['/admin']))
      .catch(err => console.log(err.message));
  }
}

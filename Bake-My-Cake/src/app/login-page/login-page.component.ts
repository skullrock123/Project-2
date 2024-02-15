import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PASSWORD } from '../models/passwordModel';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  adminForm: any = {};
  hide = true;

  ngOnInit(): void {}
  navigateToHome() {
    this.router.navigate(['home']);
  }

  submitPassword(AdminForm: any) {
    this.authService.login(AdminForm.value.password);
    AdminForm.resetForm();
    this.router.navigate(['cake-request']);
  }
}

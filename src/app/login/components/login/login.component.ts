import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './../../../core/services/login/login.service';
import { User } from './../../../core/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  user: User = {
    username: '',
    password: '',
  };
  ngOnInit(): void {}

  submitLogin() {
    this.loginService.login(this.user).subscribe((res) => {
      console.log(res);
      localStorage.setItem('access_token', res.access_token);
      this.router.navigate(['/app']);
    });
  }
}

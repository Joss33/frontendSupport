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
    if (this.user.username !== '' || this.user.password !== '') {
      this.loginService.login(this.user).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/app']);
        },
        (err) => {
          if (err.status === 401) {
            alert('El usuario no exite');
          }
        }
      );
    } else {
      alert('Todos los campos son necesarios');
    }
  }
}

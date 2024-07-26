import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private as: AuthService, private router: Router) {

  }

  async login() {
    try {
      let response = await this.as.loginWithUsernameAndPassword(this.username, this.password);
      console.log(response);
      // localStorage.setItem('token', json.token);
      this.router.navigateByUrl('/todos');
    } catch(e) {
      console.error(e);
    }

  }


}

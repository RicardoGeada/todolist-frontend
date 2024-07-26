import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


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

  constructor(private as: AuthService) {

  }

  async login() {
    try {
      let response = await this.as.loginWithUsernameAndPassword(this.username, this.password);
      console.log(response);
      // localStorage.setItem('token', json.token);
      // TODO: redirect
    } catch(e) {
      console.error(e);
    }

  }


}

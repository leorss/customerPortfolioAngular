import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = 'user'
  password = ''
  isValidLogin = true
  errorMessage = "Invalid credentials"

  // Router
  // Angular.giveMeRouter
  // Dependency Injection
  constructor(
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    ) {

  }

  handleLogin(){
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome'])
      this.isValidLogin = true
    } else {
      this.isValidLogin = false
    }
  }

}

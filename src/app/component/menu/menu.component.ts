import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    public hardcodedAuthenticationService : HardcodedAuthenticationService,
    public router: Router,
    ) {

  }

  ngOnInit(): void {

  }

  goToHome(){
    if (this.hardcodedAuthenticationService.isUserLoggedIn()) {
      this.router.navigate(['/welcome']);
    } else {
      this.router.navigate(['/login']);
    }
  }

}

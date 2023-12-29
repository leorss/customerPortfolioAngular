import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message';
  welcomeMessageFromService: string = '';
  name = '';

  constructor(
    private route:ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) {

  }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }

  handleSuccessfulResponse(response: string){
    this.welcomeMessageFromService = response;
  }

  handleErrorResponse(error: any){
    this.welcomeMessageFromService = error.error.message;
  }

}

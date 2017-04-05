import { Component, OnInit } from '@angular/core';
import { TokenService } from './token.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css'],
  providers: [TokenService]
})
export class TokenComponent implements OnInit {

  username: string;
  password: string;
  url: string;
  token: string;
  services = environment.services;
  selectedService = 'speech-to-text';
  submitted = false;

  constructor(private _tokenService: TokenService) { }

  ngOnInit() {
  }

  getToken() {
    this.submitted = true;
    this.token = `Retrieving......`;
    this._tokenService.getToken(this.username, this.password, this.url)
      .subscribe((res: string) => this.token = res,
      err => console.log(err),
      () => this.submitted = false
      );
  }

}

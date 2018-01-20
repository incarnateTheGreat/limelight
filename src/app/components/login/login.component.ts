import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import _ from 'lodash';

// Services
import { LoginInfoService } from '../../services/login-info.service';

@Component({
  selector: 'component-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	username:string;

	constructor(private loginDataService: LoginInfoService,
							private router: Router) {}

  ngOnInit() {}

	login() {
		// Run service to the latest Currency Data.
		this.loginDataService.getData('users').subscribe((data) => {
			const result = data.find((user) => {
				return user.email.toLowerCase() === this.username.toLowerCase();
			});

			if (result) {
				console.log(`login successful with ${result.name}`);
				this.router.navigate(['posts']);
			}

		}, error => console.log("fail."));
	}

}

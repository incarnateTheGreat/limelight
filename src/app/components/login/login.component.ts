import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import _ from 'lodash';

interface UserInfo {
	username: string,
	companyName: string
}

// Services
import { LoginInfoService } from '../../services/login-info.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'component-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	username:string = "Sincere@april.biz";
	userinfo: Observable<any>;

	constructor(private loginDataService: LoginInfoService,
							private user: UserService,
							private store: Store<any>,
							private router: Router) {
								this.userinfo = this.store.select('userinfo');
							}

  ngOnInit() {}

	login() {
		// Run service to the latest Currency Data.
		this.loginDataService.getData('users').subscribe((data) => {
			const result = data.find((user) => {
				return user.email.toLowerCase() === this.username.toLowerCase();
			});

			if (result) {
				console.log(`login successful with ${result.name}`);
				this.userinfo = this.store.select('userinfo');
				this.user.setUserLoggedIn();
				this.router.navigate(['dashboard']);

				this.store.dispatch({
					type: 'STORE_USER_DATA',
					data: result
				});
			}

		}, error => console.log("fail."));
	}

}

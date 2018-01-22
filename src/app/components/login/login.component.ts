import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import _ from 'lodash';

// Services
import { GetLoginInfoService } from '../../services/get-login-info.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'component-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	username:string = "Sincere@april.biz";

	constructor(private loginDataService: GetLoginInfoService,
							private user: UserService,
							private store: Store<any>,
							private router: Router) {}

  ngOnInit() {}

	login() {
		this.loginDataService.getData().subscribe((data) => {
			const result = data.find((user) => {
				return user.email.toLowerCase() === this.username.toLowerCase();
			});

			if (result) {
				this.user.setUserLoggedIn();
				this.router.navigate(['albums']);

				this.store.dispatch({
					type: 'STORE_USER_DATA',
					data: result
				});
			}
		}, error => console.log("fail."));
	}

}

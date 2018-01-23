import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import _ from 'lodash';

// Services
import { GetLoginInfoService } from '../../services/get-login-info.service';
import { UserService } from '../../services/user.service';

import * as constants from '../../constants/constants';

@Component({
  selector: 'component-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	username:string = '';
	isError:boolean = false;
	errorMessage:string = '';

	constructor(private loginDataService: GetLoginInfoService,
							private user: UserService,
							private store: Store<any>,
							private router: Router) {}

  ngOnInit() {}

	login() {
		this.loginDataService.getData(this.username).subscribe((data) => {

			if (data.length > 0) {
				const result = data.find((user) => {
					return user.email.toLowerCase() === this.username.toLowerCase();
				});

				if (result) {
					this.user.setUserLoggedIn();
					this.router.navigate(['posts']);

					this.store.dispatch({
						type: 'STORE_USER_DATA',
						data: result
					});
				}
			} else {
				this.isError = true;
				this.errorMessage = constants.USER_DOES_NOT_EXIST;
			}
		}, error => {
			this.isError = true;
			this.errorMessage = constants.SERVICE_ERROR_MESSAGE;
		});
	}

}

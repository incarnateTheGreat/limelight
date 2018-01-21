import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import _ from 'lodash';

@Injectable()
export class UserService {
	isUserLoggedIn:boolean = false
	userData:any;

	constructor(private store: Store<any>) {}

	setUserLoggedIn() {
		this.isUserLoggedIn = true;

		// Store user data in User Service variable
		this.store.select('userinfo').subscribe((userData: any) => {
			if(!_.isEmpty(userData)) {
				this.userData = userData;
			}
		});
	}

	setUserLoggedOut() {
		this.isUserLoggedIn = false;
	}

	getUserLoggedIn() {
		return this.isUserLoggedIn;
	}

}

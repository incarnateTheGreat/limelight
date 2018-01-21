import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
	isUserLoggedIn:boolean = false

  constructor() {}

	setUserLoggedIn() {
		this.isUserLoggedIn = true;
	}

	setUserLoggedOut() {
		this.isUserLoggedIn = false;
	}

	getUserLoggedIn() {
		return this.isUserLoggedIn;
	}

}

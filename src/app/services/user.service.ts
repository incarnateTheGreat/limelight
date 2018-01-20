import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

	private isUserLoggedIn:boolean = false
	private username:string = '';

  constructor() {}

	setUserLoggedIn() {
		this.isUserLoggedIn = true;
	}

	getUserLoggedIn() {
		return this.isUserLoggedIn;
	}

}

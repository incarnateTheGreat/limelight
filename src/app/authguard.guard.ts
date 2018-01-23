import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

import * as constants from './constants/constants';

@Injectable()
export class AuthguardGuard implements CanActivate {
	constructor(private user: UserService,
							private router: Router) {}

  canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
			if (this.user.getUserLoggedIn()) {
			} else {
				this.router.navigate(['/']);
			}

			return this.user.getUserLoggedIn();
		}
}

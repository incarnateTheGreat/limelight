import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthguardGuard implements CanActivate {
	constructor(private user: UserService,
							private router: Router) {}

  canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
			if (this.user.getUserLoggedIn()) {
				console.log('legit.');
			} else {
				this.router.navigate(['/']);
				console.log('nope.')
			}

			return this.user.getUserLoggedIn();
		}
}

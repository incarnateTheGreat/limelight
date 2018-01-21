import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import _ from 'lodash';

@Component({
  selector: 'component-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	userinfo: Observable<any>;
	username:string = "";
	companyName:string = "";

  constructor(private user: UserService,
							private store: Store<any>) {}

	ngOnInit() {
		this.store.select('userinfo').subscribe((data: any) => {
			if(!_.isEmpty(data)) {
				this.username = data.name.name;
				this.companyName = data.name.company.name
			}
		});
	}

	logout() {
		this.user.setUserLoggedOut();
	}
}

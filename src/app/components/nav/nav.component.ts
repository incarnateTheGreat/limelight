import { Component, OnInit } from '@angular/core';
// import { UserService } from '.,/../services/user.service';

@Component({
  selector: 'component-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

	// constructor(private user: UserService) {}

	ngOnInit() {
		// console.log('init nav', this.user);
	}

	ngOnChanges() {
		console.log('hits')
	}

}

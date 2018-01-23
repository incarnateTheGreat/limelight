import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetLoginInfoService {

  constructor(private http: Http) {}

	getData(email) {
		const url = `https://jsonplaceholder.typicode.com/users?email=${email}`;

		return this.http.get(url)
			.map(res => res.json());
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';;

@Injectable()
export class LoginInfoService {

  constructor(private http: Http) {}

	getData(path) {
		const url = `https://jsonplaceholder.typicode.com/${path}`;

		return this.http.get(url)
			.map(res => res.json());
  }
}

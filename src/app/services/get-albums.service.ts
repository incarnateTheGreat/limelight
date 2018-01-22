import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetAlbumsService {

  constructor(private http: Http) {}

	getData() {
		const url = 'https://jsonplaceholder.typicode.com/albums';

		return this.http.get(url)
			.map(res => res.json());
  }

}

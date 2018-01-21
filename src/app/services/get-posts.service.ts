import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetPostsService {

	constructor(private http: Http) {}

	getData() {
		const url = 'https://jsonplaceholder.typicode.com/posts';

		return this.http.get(url)
			.map(res => res.json());
  }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetPhotosService {

	constructor(private http: Http) {}

	getData() {
		const url = 'https://jsonplaceholder.typicode.com/photos';

		return this.http.get(url)
			.map(res => res.json());
  }

}

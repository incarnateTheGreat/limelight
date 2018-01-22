import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetPhotosService {

	constructor(private http: Http) {}

	getData(albumId?: Number) {
		let url = '';

		if (albumId === undefined) {
			url = 'https://jsonplaceholder.typicode.com/photos';
		} else {
			url = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;
		}

		return this.http.get(url)
			.map(res => res.json());
  }

}

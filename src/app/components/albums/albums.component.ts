import { Component, OnInit } from '@angular/core';
import _ from 'lodash';

// Services
import { UserService } from '../../services/user.service';
import { GetAlbumsService } from '../../services/get-albums.service';
import { GetPhotosService } from '../../services/get-photos.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
	albumsDataArr:Array<any> = [];

  constructor(private albumsService: GetAlbumsService,
							private photosService: GetPhotosService,
							private user: UserService) { }

  ngOnInit() {
		this.albumsService.getData(this.user.userData.name.id).subscribe((albumsData) => {
			this.photosService.getData().subscribe((photosData) => {
				if (albumsData) {
					for (let x in albumsData) {
						this.albumsDataArr.push({
							title: albumsData[x].title,
							numberOfPhotos: this.getNumberOfPhotos(photosData, albumsData[x].id)
						});
					}
				}
			});
		}, error => console.log("fail."));
  }

	getNumberOfPhotos(photosData, albumId) {
		return _.size(_.filter(photosData, (o) => {
			return o.albumId === albumId
		}));
	}

	openAlbum() {
		console.log('Open album.');
	}

	sortAlbums(order) {
		const arrayOrder = (order === 'asc' ? ['asc', 'desc'] : ['desc', 'asc']);

		this.albumsDataArr = _.orderBy(this.albumsDataArr, ['title'], arrayOrder);
	}
}

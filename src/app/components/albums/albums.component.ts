import { Component, OnInit, ViewChild } from '@angular/core';
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
	loading:boolean = false;
	albumsDataArr:Array<any> = [];

	// Channel child components.
	@ViewChild('modal') modalChild;

  constructor(private albumsService: GetAlbumsService,
							private photosService: GetPhotosService,
							private user: UserService) { }

  ngOnInit() {
		this.loading = true;

		this.albumsService.getData(this.user.userData.name.id).subscribe((albumsData) => {
			this.photosService.getData().subscribe((photosData) => {
				if (albumsData) {
					for (let x in albumsData) {
						this.albumsDataArr.push({
							title: albumsData[x].title,
							albumId: albumsData[x].id,
							numberOfPhotos: this.getNumberOfPhotos(photosData, albumsData[x].id)
						});
					}
				}

				this.loading = false;
			});
		}, error => console.log("Sorry. There was a problem with your request."));
  }

	getNumberOfPhotos(photosData, albumId) {
		return _.size(_.filter(photosData, (o) => {
			return o.albumId === albumId
		}));
	}

	openAlbum(albumId, title) {
		this.modalChild.isModalOpen = !this.modalChild.isModalOpen;

		this.photosService.getData(albumId).subscribe((photosData) => {
			this.modalChild.getContent(photosData, title);
		});
	}

	sortAlbums(order) {
		const arrayOrder = (order === 'asc' ? ['asc', 'desc'] : ['desc', 'asc']);

		this.albumsDataArr = _.orderBy(this.albumsDataArr, ['title'], arrayOrder);
	}
}

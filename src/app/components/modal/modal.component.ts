import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
	isModalOpen:boolean = false;
	photos:Array<string>;
	albumTitle:string;

  constructor() { }

  ngOnInit() {}

	closeModal() {
		this.isModalOpen = false;
	}

	getContent(photosObj, albumTitle) {
		this.photos = photosObj;
		this.albumTitle = albumTitle;
	}
}

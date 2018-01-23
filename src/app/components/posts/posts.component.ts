import { Component, OnInit } from '@angular/core';
import _ from 'lodash';

// Services
import { UserService } from '../../services/user.service';
import { GetPostsService } from '../../services/get-posts.service';
import { GetCommentsService } from '../../services/get-comments.service';

import * as constants from '../../constants/constants';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
	loading:boolean = false;
	postDataArr:Array<any> = [];

  constructor(private postDataService: GetPostsService,
							private commentDataService: GetCommentsService,
							private user: UserService) { }

  ngOnInit() {
		// TODO: Perhaps use Local Storage to prevent data reloads?

		this.loading = true;

		this.postDataService.getData(this.user.userData.name.id).subscribe((postData) => {
			this.commentDataService.getData().subscribe((commentData) => {
				if (postData) {
					for (let x in postData) {
						this.postDataArr.push({
							title: postData[x].title,
							body: postData[x].body,
							numberOfComments: this.getNumberOfComments(commentData, postData[x].id)
						});
					}
				}

				this.loading = false;
			});
		}, error => constants.SERVICE_ERROR_MESSAGE);
  }

	getNumberOfComments(commentData, postId) {
		return _.size(_.filter(commentData, (comment) => {
			return comment.postId === postId;
		}));
	}

	togglePostView(e) {
		const parent = e.parentNode,
					bodyContainer = parent.querySelector("._posts_post-container__body-container");

		if (bodyContainer.classList.contains("-open")) {
			bodyContainer.classList.remove("-open");
		} else {
			bodyContainer.classList.add("-open");
		}
	}
}

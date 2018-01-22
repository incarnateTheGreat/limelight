import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import _ from 'lodash';

// Services
import { UserService } from '../../services/user.service';
import { GetPostsService } from '../../services/get-posts.service';
import { GetCommentsService } from '../../services/get-comments.service';

interface Post {
	title: string,
	body: string,
	comments: number
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
	postDataArr:Array<any> = [];

  constructor(private postDataService: GetPostsService,
							private commentDataService: GetCommentsService,
							private user: UserService) { }

  ngOnInit() {
		// TODO: Perhaps use Local Storage to prevent data reloads?

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
			});
		}, error => console.log("Sorry. There is a problem with your request."));
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

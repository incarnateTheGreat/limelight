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
		
		this.postDataService.getData().subscribe((postData) => {
			const postDataResult = postData.filter((o) => {
				return o.userId === this.user.userData.name.id;
			});

			this.commentDataService.getData().subscribe((commentData) => {
				const commentDataResult = commentData.filter((o) => {
					return o.postId === 1;
				});

				if (postDataResult) {
					for (let x in postDataResult) {
						this.postDataArr.push({
							title: postDataResult[x].title,
							body: postDataResult[x].body,
							numberOfComments: Object.keys(commentDataResult).length
						});
					}
				}
			});
		}, error => console.log("fail."));
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

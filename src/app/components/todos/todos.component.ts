import { Component, OnInit } from '@angular/core';
import _ from 'lodash';

// Services
import { UserService } from '../../services/user.service';
import { GetTodosService } from '../../services/get-todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
	todosDataArr:Array<any> = [];
	checkedTodosArr:Array<number>;
	displayCompleted:boolean = false;

  constructor(private todosService: GetTodosService,
							private user: UserService) { }

  ngOnInit() {
		this.todosService.getData(this.user.userData.name.id).subscribe((todosData) => {
			this.todosDataArr = todosData;
		});
	}

	toggleCheckbox(checkboxId) {
		const todosDataIndex = _.findIndex(this.todosDataArr, (o) => {
			return o.id === checkboxId;
		});

		this.todosDataArr[todosDataIndex].completed = !this.todosDataArr[todosDataIndex].completed;
	}

	toggleDisplayCompleted() {
		this.displayCompleted = !this.displayCompleted;
	}
}

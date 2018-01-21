import { Action } from '@ngrx/store';

export function simpleReducer(state: object = {}, action) {
	switch (action.type) {
		case 'STORE_USER_DATA':
			return {name: action.data}

		default:
			return state;
	}
}

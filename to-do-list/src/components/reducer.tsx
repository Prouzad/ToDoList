import { IState, IReducer } from '../interface';

export default function reducer(state: IState, action: IReducer) {
	switch (action.type) {
		case 'addTask':
			return {
				...state,
				tasks: [...state!.tasks!, ...action!.tasks!],
				inputValue: '',
			};
		case 'inputValue':
			return {
				...state,
				inputValue: action.inputValue,
			};

		case 'removeTask':
			return {
				...state,
				tasks: [...action!.tasks!],
			};

		default:
			return state;
	}
}

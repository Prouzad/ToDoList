export interface ITasks {
	_id?: number,
	name?: string,
	done?: boolean,
	edit?: boolean,
}

export interface IState {
	tasks?: ITasks[],
	inputValue?: string,
	editTask?: string
}

export interface IReducer {
  type?: string,
	tasks?: ITasks[] | null, 
	inputValue?: string,

}

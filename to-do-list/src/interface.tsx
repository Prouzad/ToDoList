export interface ITasks {
	_id?: number,
	name?: string,
	done?: boolean,
}

export interface IState {
	tasks?: ITasks[],
	inputValue?: string,
}

export interface IReducer {
  type?: string,
	tasks?: ITasks[], 
	inputValue?: string,

}

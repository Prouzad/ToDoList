import { createContext } from 'react';
import { IReducer, IState } from '../interface';
export type GlobalContent = {
	state?: IState
  dispatch: ({ type, tasks, inputValue }: IReducer) => void;
};
export const Context = createContext<GlobalContent>({
  state: {},
  dispatch: () => {},
});

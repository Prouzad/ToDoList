
import './App.css';
import Header from './components/Header';
import AddToDo from './components/AddToDo/AddToDo';
import TaskBox from './components/TaskBox/TaskBox';
import Footer from './components/Footer';
import { IState } from './interface';
import { Context } from './components/Context';
import { useReducer } from 'react';
import reducer from './components/reducer';

function App() {
	const Startstates: IState = { 
		tasks: [],
		inputValue: '',
	}
	const [state, dispatch] = useReducer(reducer, Startstates);

  return (
		<Context.Provider value={{state, dispatch}}>
			<div className="App" style={{minHeight:'100vh', display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
				<div>
					<Header/>
					<AddToDo/>
					<TaskBox/>
				</div>
				<Footer/>
			</div>
		</Context.Provider>
  );
}

export default App;

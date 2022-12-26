
import './App.css';
import Header from './components/Header';
import AddToDo from './components/AddToDo/AddToDo';
import TaskBox from './components/TaskBox/TaskBox';
import Footer from './components/Footer';
import { IState, ITasks } from './interface';
import { Context } from './components/Context';
import { useEffect, useReducer } from 'react';
import reducer from './components/reducer';

function App() {
	const Startstates: IState = { 
		tasks: [],
		inputValue: '',
		editTask: '',
		
	}
	const [state, dispatch] = useReducer(reducer, Startstates);

	useEffect(() => {
		const tasks = JSON.parse(localStorage.getItem('TaskArray')!)
    if(!tasks){
			dispatch({
				type: 'removeTask',
				tasks: tasks
			})
		}
  }, []);

	useEffect(() => {
    return () => {
			console.log('Unmount')
      if(!state.tasks){
				localStorage.setItem('TaskArray', JSON.stringify(state!.tasks!))
			}
    };
  });
	
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

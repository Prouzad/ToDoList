import React from 'react';
import './App.css';
import Header from './components/Header';
import AddToDo from './components/AddToDo/AddToDo';
import TaskBox from './components/TaskBox/TaskBox';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{minHeight:'100vh', display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <div>
				<Header/>
				<AddToDo/>
				<TaskBox/>
			</div>
			<Footer/>
    </div>
  );
}

export default App;

import { useContext } from 'react';
import { Context } from '../Context';
import style from './AddToDo.module.css'
function AddToDo() {
	const { dispatch, state } = useContext(Context);
	
  return (
    <div className={style.inputBox}>s
			<form onSubmit={(e) => {
				  e.preventDefault();
          dispatch({
            type: 'addTask',
						tasks: [{_id: Date.now(), name: state?.inputValue}]
          });
					console.log(state)
			}}>

      	<input type='text' placeholder='Write your task' className={style.input} value={state?.inputValue} onChange={(e) => {
            dispatch({
              type: 'inputValue',
              inputValue: e.target.value,
            });
          }}/>

			</form>
    </div>
  );
}

export default AddToDo;

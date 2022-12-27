import { useContext, useEffect} from 'react';
import { Context } from '../Context';
import TaskList from './Task/TaskList';
import style from './TaskBox.module.css'
import { ITasks } from '../../interface';

function TaskBox() {
	const { state, dispatch } = useContext(Context);


	const removeTask = (id: number) => {
		const arr = state?.tasks?.filter((e) => e._id !== id)

		dispatch({
			type: 'removeTask',
			tasks: arr
		})
	
	}

		const arr = state?.tasks?.sort((x, y) => x!._id! - y!._id!).sort(function(x, y) {
		return Number(y.done) - Number(x.done);
 	}).map((task: ITasks) => {
    return (
      <div draggable key={task._id} >
          {<TaskList tasks={task} callback={removeTask} idx={task!._id!} />}
      </div>
    );
  }).reverse()
  return <div className={style.tasksBox}>{arr?.length !== 0 ? arr : <h1>Tasks not found </h1>}</div>;
}

export default TaskBox;

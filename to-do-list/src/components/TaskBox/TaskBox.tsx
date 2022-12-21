import { useContext } from 'react';
import { Context } from '../Context';
import TaskList from './Task/TaskList';
import style from './TaskBox.module.css'
import { ITasks } from '../../interface';
function TaskBox() {
	const { state } = useContext(Context);
	
	const arr = state?.tasks?.map((task: ITasks) => {
    return (
      <div key={task._id}>
          {<TaskList tasks={task} />}
      </div>
    );
  });
  return <div className={style.tasksBox}>{arr?.length !== 0 ? arr : <h1>Cards not found </h1>}</div>;
}

export default TaskBox;

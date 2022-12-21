import TaskList from './Task/TaskList';
import style from './TaskBox.module.css'
function TaskBox() {
  return (
    <div className={style.TaskBox}>
			<TaskList/>
    </div>
  );
}

export default TaskBox;

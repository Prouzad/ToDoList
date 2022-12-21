import { ITasks } from '../../../interface';
import style from '../TaskBox.module.css'
import Checkbox from '@mui/material/Checkbox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function TaskList(props: { tasks: ITasks }): JSX.Element {
  return (
    <div className={style.tasks}>
			<div className={style.firstBox}>
				<Checkbox {...label} />
				<div>{props.tasks.name}</div>
			</div>
			<div className={style.secondBox}>
				<DeleteForeverIcon/>
				<EditIcon />
			</div>
    </div>
  );
}

export default TaskList;

import { ITasks } from '../../../interface';
import style from '../TaskBox.module.css'
import Checkbox from '@mui/material/Checkbox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { blue, grey, red } from '@mui/material/colors';
import { ChangeEvent, useContext } from 'react';
import { Context } from '../../Context';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function TaskList(props: { tasks: ITasks, callback: (id: number)=>void, idx: number }): JSX.Element {
	const { state, dispatch } = useContext(Context);


	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const arr = state?.tasks?.map((item) => item._id === props.idx ? {...item, done: e.target.checked} : item ).sort(function(x, y) {
			return Number(x.done) - Number(y.done);
	 });
		console.log(arr)

		dispatch({
			type: 'removeTask',
			tasks: arr
		})
		
		// if(e.target.checked){
		// 	dispatch({
		// 		type: 'done'
		// 	})
		// }else if(e.target.checked){
		// 	dispatch({
		// 		type: 'not done'
		// 	})
		// }

	}

  return (
    <div className={style.tasks}>
			<div className={style.firstBox}>
				<Checkbox {...label} onChange={handleChange} checked={props.tasks.done}/>
				<div style={props.tasks.done ? {color: grey[700], textDecoration: 'line-through', textDecorationThickness: '0.2rem'} : {color: '#426ea8'}} className={style.name}>{props.tasks.name}</div>
			</div>
			<div className={style.secondBox}>
				<DeleteForeverIcon sx={props.tasks.done ? {color: grey[700]} : {color: red[400]}} style={{cursor: 'pointer'}} onClick={(e)=> props.callback(props.idx)}/>
				<EditIcon sx={props.tasks.done ? {color: grey[700]} : {color: blue[900]}} style={{cursor: 'pointer'}}/>
			</div>
    </div>
  );
}

export default TaskList;

import { ITasks } from '../../../interface';
import style from '../TaskBox.module.css'
import Checkbox from '@mui/material/Checkbox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { blue, green, grey, red } from '@mui/material/colors';
import { ChangeEvent,  useContext } from 'react';
import { Context } from '../../Context';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function TaskList(props: { tasks: ITasks, callback: (id: number)=>void, idx: number }): JSX.Element {
	const { state, dispatch } = useContext(Context);


	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const arr = state?.tasks?.map((item) => item._id === props.idx ? {...item, done: e.target.checked} : item )
		dispatch({
			type: 'removeTask',
			tasks: arr
		})
	
	}

	const editTask = ()=>{
		const name = state?.tasks?.find((item) => item._id === props.idx)
		if(name?.name === state?.editTask && props.tasks.edit){

		}
	
			if(!props.tasks.edit){
			 dispatch({
				 type: 'edit',
				 inputValue: name?.name
			 })
		 }else{
			 dispatch({
				 type: 'edit',
				 inputValue: ''
			 })
		 }
		 const arr = state?.tasks?.map((item) => item._id === props.idx ? {...item, edit: !props.tasks.edit} : {...item, edit: false} )
		 dispatch({
			 type: 'removeTask',
			 tasks: arr
		 })
		 
	}
	

  return (
    <div className={style.tasks}>
			<div className={style.firstBox}>
				<Checkbox {...label} onChange={handleChange} checked={props.tasks.done}/>
				{props.tasks.edit 
				? <input type='text' value={state?.editTask} className={style.input} onChange={(e)=>{
					dispatch({
						type: 'edit',
						inputValue: e.target.value
					})
				}}/> 
				: <div style={props.tasks.done ? {color: grey[700], textDecoration: 'line-through', textDecorationThickness: '0.2rem'} : {color: '#426ea8'}} className={style.name}>{props.tasks.name}</div>
				}
			</div>
			<div className={style.secondBox}>
				{props.tasks.edit
				? <><CheckCircleIcon sx={props.tasks.done ? {color: grey[700]} : {color: green[500]}} style={{cursor: 'pointer'}} onClick={editTask}/>
					<CancelIcon sx={props.tasks.done ? {color: grey[700]} : {color: green[500]}} style={{cursor: 'pointer'}} onClick={editTask}/></>
				: <><EditIcon sx={props.tasks.done ? {color: grey[700]} : {color: blue[900]}} style={{cursor: 'pointer'}} onClick={editTask}/>
					<DeleteForeverIcon sx={props.tasks.done ? {color: grey[700]} : {color: red[400]}} style={{cursor: 'pointer'}} onClick={(e)=> props.callback(props.idx)}/></>}
			</div>
    </div>
  );
}

export default TaskList;

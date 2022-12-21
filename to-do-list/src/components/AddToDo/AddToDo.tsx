import style from './AddToDo.module.css'
function AddToDo() {
  return (
    <div className={style.inputBox}>
      <input type='text' placeholder='Write your task' className={style.input}/>
    </div>
  );
}

export default AddToDo;

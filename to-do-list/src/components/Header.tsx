import style from './MainComponents.module.css'
function Header() {
  return (
    <div className={style.headerBox}>
      <div className={style.logo}>
				<h1>Pro ToDo</h1>
			</div>
    </div>
  );
}

export default Header;

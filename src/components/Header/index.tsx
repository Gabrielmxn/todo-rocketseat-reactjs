import style from './Header.module.css';

import imgLogo from '../../assets/rocket.svg';

export function Header(){
  
  return(
    <header className={style.test}>

      <img
        src={imgLogo}
        alt="Logo da toDo list"
       />
      <div className={style.textLogo}>
        <span className={style.to}>to</span>
        <span className={style.do}>do</span>
      </div>
       
    </header>
  )
}
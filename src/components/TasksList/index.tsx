import { Trash, Check } from 'phosphor-react';
import { TasksType } from '../../TasksType';

import styles from './TasksList.module.css';
interface TasksTypeProps {
  check: boolean;
  content: string;
  handleCheckTasks: (tasks: TasksType) => void;
  handleTrashTasks: (tasks: TasksType) => void;
  id: number;
}


export function TasksList({id,  content, check, handleCheckTasks, handleTrashTasks}: TasksTypeProps){
  function onCheckTasks(){
  
    handleCheckTasks({
      id,
      check: !check, 
      contents: content
    })
  }

  function onTrashTasks(){
    handleTrashTasks({
      id,
      check: !check, 
      contents: content
    })
  }
  return(
    <section className={styles.containerTasksList}>
      <div className={check ? styles.checkAndTextChecked : styles.checkAndText}>
        
          <button className={styles.checkButton} onClick={onCheckTasks}>
          {
          check 
            ? 
              <span className={styles.checkIn}><Check size={12}/> </span>
            : 
              <span className={styles.check}></span>
          }
          </button>
        <p>{content}</p>
      </div>
      <button  className={styles.deleteButton} onClick={onTrashTasks}>
        <Trash size={14}/>
      </button>
      
    </section>
  )
}
import { NoTaskRegistered } from '../NoTaskRegistered';
import { TasksList } from '../TasksList';

import { TasksType } from '../../TasksType';

import styles from './ViewToDoList.module.css';

interface TasksProps{
  tasks: TasksType[];
  handleCheckTasks: (tasks: TasksType) => void;
  handleTrashTasks: (tasks: TasksType) => void;
}
export function ViewToDoList({ tasks, handleCheckTasks, handleTrashTasks }: TasksProps){
 const completedTasks = tasks.filter(el => el.check === true);
  return(
    <>
      <header className={styles.header}>
        <div className={styles.titleViewToDoList}>
          <span className={styles.tasksCreate}>Tarefas criadas</span>
          <span className={styles.numberToDoList}>{tasks.length}</span>
        </div>
        <div className={styles.titleViewToDoList}>
          <span className={styles.tasksConclued}>Concluídas</span>
          <span className={styles.numberToDoList}>{`${completedTasks.length} de ${tasks.length}`}</span>
        </div>
      </header>
      {tasks.length === 0 ? <NoTaskRegistered /> : ''}
      {tasks.map(response => { 
        return(
          <TasksList 
            key = {response.id}
            id = {response.id}
            check={response.check} 
            content={response.contents}
            handleCheckTasks={handleCheckTasks}
            handleTrashTasks={handleTrashTasks}
          />
        )
      } )}
    </>
  )
} 
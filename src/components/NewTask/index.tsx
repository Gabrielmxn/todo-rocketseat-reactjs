import styles from './NewTask.module.css';
import {PlusCircle } from 'phosphor-react';
import { ChangeEvent, useState, FormEvent } from 'react';
import { ViewToDoList } from '../ViewToDoList';
import { TasksType } from '../../TasksType';

export function NewTask(){
  const [tasks, setTasks] = useState<TasksType[]>([])
  const [newTask, setNewTask] = useState('');
  const [idNumber, setIdNumber] = useState(0)


  function modificarInput(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function enviarTasks(event: FormEvent) {
    event.preventDefault();
    if(!newTask){
      return console.log('preencher tudo');
    }

    const createNewTask =  {
      id: idNumber + 1,
      contents: newTask,
      check: false
   }
    setTasks([...tasks, createNewTask])
    setIdNumber(idNumber + 1);
    setNewTask('');
  }
//excluir

  function handleTrashTasks(task: TasksType){
    const newArrayTasks = tasks.filter( (elTask) => elTask.id !== task.id);

    setTasks(newArrayTasks)
  }
  function handleCheckTasks(task: TasksType){
    const newArrayTasks = tasks.map( (elTask) => {
      if(elTask.id === task.id){
        elTask.check = !elTask.check;

        return elTask
      }
      return elTask
    });

    setTasks(newArrayTasks)
  }
  return(
    <main>
      <form  onSubmit={enviarTasks} className={styles.createTask}>
        <input 
          type="text"
          placeholder='Adicione uma nova tarefa'
          value={newTask}
          onChange={(event) => modificarInput(event)} 
        />
        <button className={styles.buttonNewTask}>
          <span>Criar</span>
          <PlusCircle size={16}/>
        </button>
      </form>
      <ViewToDoList tasks={tasks} handleCheckTasks={handleCheckTasks} handleTrashTasks={handleTrashTasks}/>
    </main>
   
  )
}
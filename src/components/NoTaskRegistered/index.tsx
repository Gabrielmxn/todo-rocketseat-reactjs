import imgClipboard from '../../assets/Clipboard.svg';
import styles from './NoTaskRegistered.module.css';

export function NoTaskRegistered(){
  return(
    <section className={styles.containerNoTask}>
      <img src={imgClipboard} />
      <div className={styles.containerText}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
      
    </section>
  )
}
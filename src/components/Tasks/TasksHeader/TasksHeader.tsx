import styles from './TasksHeader.module.css'

export function TasksHeader() {
  return(
    <header className={styles.tasksHeader}>
      <p>Tarefas criadas <span>5</span></p>
      <p>Concluídas <span>3 de 5</span></p>
    </header>
  )
}
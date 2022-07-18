import styles from './TasksHeader.module.css'

export function TasksHeader() {
  return(
    <header className={styles.tasksHeader}>
      <p>Tarefas criadas <span>0</span></p>
      <p>Tarefas concluídas <span>0</span></p>
    </header>
  )
}
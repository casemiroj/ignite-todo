import styles from './TasksHeader.module.css'

interface ITasksHeaderProps {
  quantity: number
  completedTasks: number
}

export function TasksHeader({ quantity, completedTasks }: ITasksHeaderProps) {
  return(
    <header className={styles.tasksHeader}>
      <p>Tarefas criadas <span>{quantity}</span></p>
      <p>Concluídas <span>{completedTasks} de {quantity}</span></p>
    </header>
  )
}
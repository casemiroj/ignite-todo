import styles from './Tasks.module.css'
import { TasksHeader } from './TasksHeader/TasksHeader'

export function Tasks() {
  return(
    <section className={styles.tasksWrapper}>
      <TasksHeader />
    </section>
  )
}
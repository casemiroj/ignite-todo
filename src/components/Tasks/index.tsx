import { Task } from './Task'
import styles from './Tasks.module.css'
import { TasksHeader } from './TasksHeader/TasksHeader'

export function Tasks() {
  return(
    <section className={styles.tasksWrapper}>
      <TasksHeader />
      <div className={styles.list}>
        <Task />
        <Task />
      </div>
    </section>
  )
}
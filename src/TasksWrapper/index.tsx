import { EmptyTasks } from '../EmptyTasks'
import { TasksHeader } from '../TasksHeader/TasksHeader'
import styles from './TasksWrapper.module.css'

export function TasksWrapper() {
  return(
    <div className={styles.wrapper}>
      <TasksHeader />
      <EmptyTasks />
    </div>
  )
}
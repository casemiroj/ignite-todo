import { EmptyTasks } from '../EmptyTasks'
import { Task } from '../Task'
import { TasksHeader } from '../TasksHeader/TasksHeader'
import styles from './TasksWrapper.module.css'

export function TasksWrapper() {
  return(
    <div className={styles.wrapper}>
      <TasksHeader />
      <div className={styles.taskList}>
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
      {/* <EmptyTasks /> */}
    </div>
  )
}
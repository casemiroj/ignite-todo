import { ITask } from '../../App'
import { EmptyTasks } from '../EmptyTasks'
import { Task } from './Task'
import styles from './Tasks.module.css'
import { TasksHeader } from './TasksHeader'

interface ITasksProps {
  tasks: ITask[],
  onDelete: (taskId: string) => void,
  onToggleCompleted: (taskId: string) => void,
}

export function Tasks({ tasks, onDelete, onToggleCompleted }: ITasksProps) {
  const tasksQuantity = tasks.length
  const completedTasks = tasks.filter(task => task.isCompleted === true).length

  return(
    <section className={styles.tasksWrapper}>
      <TasksHeader quantity={tasksQuantity} completedTasks={completedTasks} />
      {!tasksQuantity ? <EmptyTasks /> : (
        <div className={styles.list}>
        {tasks.map(task => (
          <Task 
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggleCompleted={onToggleCompleted}
          />
        ))}
      </div>
      )}
      
    </section>
  )
}
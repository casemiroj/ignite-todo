
import styles from './Task.module.css'
import { TbTrash } from 'react-icons/tb'
import { ITask } from '../../../App'
import { BsFillCheckCircleFill } from 'react-icons/bs'

interface ITaskProps {
  task: ITask
  onDelete: (taskId: string) => void
  onToggleCompleted: (taskId: string) => void
}

export function Task({ task, onDelete, onToggleCompleted }: ITaskProps) {
  const isCompleted = task.isCompleted

  return(
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onToggleCompleted(task.id)}>
        {isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>
      
      <p className={task.isCompleted ? styles.textCompleted : ''}>{task.title}</p>
      <button className={styles.delete} onClick={() => onDelete(task.id)}>
        <TbTrash size={20}/>
      </button>
    </div>
  )
}
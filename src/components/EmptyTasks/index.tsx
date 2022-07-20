import styles from './EmptyTasks.module.css'
import { TbClipboardCheck } from 'react-icons/tb'

export function EmptyTasks() {
  return (
    <div className={styles.empty}>
      <TbClipboardCheck size={50}/>
      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}
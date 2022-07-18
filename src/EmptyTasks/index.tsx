import styles from './EmptyTasks.module.css'
import { ClipboardText } from 'phosphor-react'

export function EmptyTasks() {
  return (
    <div className={styles.empty}>
      <ClipboardText size={56} />
      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}
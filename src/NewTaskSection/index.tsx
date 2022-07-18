import { PlusCircle } from "phosphor-react";
import styles from './NewTaskSection.module.css'

export function NewTaskSection() {
  return (
    <form className={styles.formContainer}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar 
        <PlusCircle size={16} weight="bold"/>
      </button>
    </form>
  )
}
import styles from './Header.module.css'
import Logo from '../../assets/logo.svg'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { ChangeEvent, FormEvent, useState } from 'react'

interface IHeaderProps {
  onAddTask: (taskTitle: string) => void
}

export function Header({ onAddTask }: IHeaderProps) {
  const [title, setTitle] = useState<string>('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    onAddTask(title)
    setTitle('')
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  return(
    <header>
      <div className={styles.logoSection}>
        <img src={Logo} alt="Logo to-do" />
      </div>
      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa" 
          onChange={onChangeTitle}
          value={title}  
        />
        <button>
          Criar 
          <AiOutlinePlusCircle size={16} />
        </button>
      </form>
    </header>
  )
}
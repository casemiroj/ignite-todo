import styles from './Header.module.css'
import Logo from '../../assets/logo.svg'
import { AiOutlinePlusCircle } from 'react-icons/ai'

export function Header() {
  return(
    <header>
      <div className={styles.logoSection}>
        <img src={Logo} alt="Logo to-do" />
      </div>
      <form className={styles.newTaskForm}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar 
          <AiOutlinePlusCircle size={16} />
        </button>
      </form>
    </header>
  )
}
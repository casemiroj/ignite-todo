import styles from './Header.module.css'
import Logo from '../../assets/logo.svg'
import { PlusCircle } from 'phosphor-react'

export function Header() {
  return(
    <header>
      <div className={styles.logoSection}>
        <img src={Logo} alt="Logo to-do" />
      </div>
      <form className={styles.formContainer}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar 
          <PlusCircle size={16} weight="bold"/>
        </button>
    </form>
    </header>
  )
}
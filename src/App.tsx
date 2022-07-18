import './global.css'
import styles from './App.module.css'
import Logo from './assets/logo.svg'
import { NewTaskSection } from './NewTaskSection'

export function App() {
  return(
    <>
      <header className={styles.header}>
        <img src={Logo} alt="Logo to-do" />
      </header>
      <NewTaskSection />
    </>
  )
}
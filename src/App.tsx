import './global.css'
import styles from './App.module.css'
import Logo from './assets/logo.svg'

export function App() {
  return(
    <>
      <header className={styles.header}>
        <img src={Logo} alt="Logo to-do" />
      </header>
      <div className={styles.input}></div>
    
    </>
  )
}
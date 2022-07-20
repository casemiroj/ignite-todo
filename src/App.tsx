import './global.css'
import { TasksWrapper } from './TasksWrapper'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

export function App() {
  return(
    <>
      <Header />
      <Tasks />
    </>
  )
}
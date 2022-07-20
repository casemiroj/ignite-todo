import './global.css'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import { useState } from 'react'

export interface ITask {
  id: string,
  title: string,
  isCompleted: boolean
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  function addTask(taskTitle: string) {
    const newTask: ITask = {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    }

    const newTasks = [...tasks, newTask]

    setTasks(newTasks)
  }

  function deleteTaskById(taskId: string) {
    const tasksWithoutDeletedTask = tasks.filter(task => task.id !== taskId)
    setTasks(tasksWithoutDeletedTask)
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    })

    setTasks(newTasks)
  }

  return(
    <>
      <Header onAddTask={addTask}/>
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onToggleCompleted={toggleTaskCompletedById}
      />
    </>
  )
}
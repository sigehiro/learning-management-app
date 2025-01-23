import React, { useEffect, useState } from 'react'
import { fetchTasks } from './api'
import { Task } from './types'
import './App.css'

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const getTasks = async () => {
      try {
        const tasks = await fetchTasks()
        setTasks(tasks)
      } catch (err) {
        console.error('Error fetching tasks:', err)
      }
    }

    getTasks()
  }, [])

  return (
    <>
      <h1>タスク一覧</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title} - {task.completed ? 'completed' : 'not yet'}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App

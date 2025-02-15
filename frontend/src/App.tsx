import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/HomePage/HomePage'
// import { fetchTasks } from './api'
// import { Task } from './types'
import './App.css'

const App: React.FC = () => {
  //ーーーーーーーーーここからーーーーーーーーーーーーー
  //  はじめのDB接続を確認するために、useStateを使ってタスクのリストを保持する
  // const [tasks, setTasks] = useState<Task[]>([])

  // useEffect(() => {
  //   const getTasks = async () => {
  //     try {
  //       const tasks = await fetchTasks()
  //       setTasks(tasks)
  //     } catch (err) {
  //       console.error('Error fetching tasks:', err)
  //     }
  //   }

  //   getTasks()
  // }, [])
  //ーーーーーーーーーここまでーーーーーーーーーーーーー

  return (
    <>
      {/*ここからDB接続を確認するために、タスクのリストを表示する
       <h1>タスク一覧</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title} - {task.completed ? 'completed' : 'not yet'}
          </li>
        ))}
      </ul> */}

      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  )
}

export default App

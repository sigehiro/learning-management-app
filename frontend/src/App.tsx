import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Homepage from './pages/HomePage/HomePage'
// import { fetchTasks } from './api'
// import { Task } from './types'
import './App.css'
import TaskPage from './pages/TaskPage/TaskPage'

// styled-components：テーマの型を定義 (必要に応じて)
interface Theme {
  main: string
  secondary: string
}

// styled-components：デフォルトテーマを定義
const defaultTheme: Theme = {
  main: 'papayawhip',
  secondary: 'tomato',
}

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
    <ThemeProvider theme={defaultTheme}>
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
          <Route path="/task" element={<TaskPage />} />
        </Routes>
      </>
    </ThemeProvider>
  )
}

export default App

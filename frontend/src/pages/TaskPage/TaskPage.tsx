import React from 'react'
import { Header, Navigation, LoginLink, Footer } from './TaskPage.styles'
import TaskList from '../../components/TaskList/TaskList'

const TaskPage: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <Header>
        <Navigation>
          <LoginLink href="/login">Login</LoginLink>
        </Navigation>
      </Header>

      <main>
        {/* Task display Section */}
        <TaskList />
      </main>
      <Footer>
        <p>&copy; 2025 CJ TaskMaster. All rights reserved.</p>
      </Footer>
    </div>
  )
}

export default TaskPage

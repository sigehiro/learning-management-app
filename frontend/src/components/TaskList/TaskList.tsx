'use client'

import type React from 'react'
import { Star } from 'lucide-react'

type Task = {
  id: number
  name: string
  status: 'TO DO' | 'IN PROGRESS' | 'COMPLETE' | 'CANCELLED'
  priority: 'low' | 'medium' | 'high'
  estimated: string
  type: 'Marketing' | 'Management' | 'Finance' | 'Programming' | 'Laboratory'
}

const tasks: Task[] = [
  {
    id: 1,
    name: 'Reading and crating designs',
    status: 'TO DO',
    priority: 'low',
    estimated: '15s',
    type: 'Marketing',
  },
  {
    id: 2,
    name: 'Reading and crating designs',
    status: 'TO DO',
    priority: 'medium',
    estimated: '15s',
    type: 'Marketing',
  },
  {
    id: 3,
    name: 'Reading and crating designs',
    status: 'IN PROGRESS',
    priority: 'medium',
    estimated: '15s',
    type: 'Management',
  },
  {
    id: 4,
    name: 'Reading and crating designs',
    status: 'IN PROGRESS',
    priority: 'high',
    estimated: '15s',
    type: 'Finance',
  },
  {
    id: 5,
    name: 'Reading and crating designs',
    status: 'COMPLETE',
    priority: 'low',
    estimated: '15s',
    type: 'Programming',
  },
  {
    id: 6,
    name: 'Reading and crating designs',
    status: 'CANCELLED',
    priority: 'low',
    estimated: '15s',
    type: 'Laboratory',
  },
]

const delayedTasks: Task[] = [
  {
    id: 7,
    name: 'Reading and crating designs',
    status: 'TO DO',
    priority: 'medium',
    estimated: '15s',
    type: 'Marketing',
  },
  {
    id: 8,
    name: 'Reading and crating designs',
    status: 'IN PROGRESS',
    priority: 'medium',
    estimated: '15s',
    type: 'Management',
  },
]

const getStatusColor = (status: Task['status']) => {
  switch (status) {
    case 'TO DO':
      return 'bg-gray-200'
    case 'IN PROGRESS':
      return 'bg-blue-500'
    case 'COMPLETE':
      return 'bg-emerald-500'
    case 'CANCELLED':
      return 'bg-red-500'
    default:
      return 'bg-gray-200'
  }
}

const getTypeColor = (type: Task['type']) => {
  switch (type) {
    case 'Marketing':
      return 'bg-red-600 hover:bg-red-700'
    case 'Management':
      return 'bg-blue-400 hover:bg-blue-500'
    case 'Finance':
      return 'bg-pink-500 hover:bg-pink-600'
    case 'Programming':
      return 'bg-yellow-500 hover:bg-yellow-600'
    case 'Laboratory':
      return 'bg-green-600 hover:bg-green-700'
    default:
      return 'bg-gray-500 hover:bg-gray-600'
  }
}

const getPriorityColor = (priority: Task['priority']) => {
  switch (priority) {
    case 'low':
      return 'bg-sky-500'
    case 'medium':
      return 'bg-yellow-500'
    case 'high':
      return 'bg-red-500'
    default:
      return 'bg-gray-500'
  }
}

const Badge = ({
  children,
  className,
  variant,
}: {
  children: React.ReactNode
  className?: string
  variant?: string
}) => {
  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
    >
      {children}
    </div>
  )
}

const Button = ({
  children,
  className,
  onClick,
  variant,
  size,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: string
  size?: string
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

// Tableコンポーネント内の変更
const Table = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className="overflow-y-auto">
      <table className={`w-full border-collapse text-sm table-fixed border ${className}`}>{children}</table>{' '}
      {/* table-fixedを追加 */}
    </div>
  )
}

// ヘッダーとボディの幅を揃えるために、TableHeaderとTableBodyを修正
const TableHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <thead>
      <tr className="border-b transition-colors hover:bg-muted/50">{children}</tr>
    </thead>
  )
}

const TableBody = ({ children }: { children: React.ReactNode }) => {
  return <tbody>{children}</tbody>
}

const TableRow = ({ children }: { children: React.ReactNode }) => {
  return <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">{children}</tr>
}

const TableCell = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <td className={`p-4 align-middle border-l  border-gray-300 ${className}`}>{children}</td>
}

const TableHead = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <th
      className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground border-l  border-gray-300 ${className}`}
    >
      {children}
    </th>
  )
}

export default function TaskList() {
  const TaskTable = ({ tasks, title, icon }: { tasks: Task[]; title: string; icon?: React.ReactNode }) => (
    <div className="rounded-lg bg-card text-card-foreground shadow-sm">
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center space-x-2">
          {icon}
          <h3 className="text-lg font-medium">{title}</h3>
          {title === 'Daily' && <Badge>{tasks.length} TASKS</Badge>}
        </div>
        {title === 'Work To Do Today' && <Button variant="outline">+ NEW TASK</Button>}
      </div>
      <Table className="border-t">
        <TableHeader>
          <TableHead className="w-[30px]">&nbsp;</TableHead>
          <TableHead className="w-[45%]">TASK NAME</TableHead>
          <TableHead className="w-[17%] text-center">STATUS</TableHead>
          <TableHead className="w-[12%] text-center">PRIORITY</TableHead>
          <TableHead className="w-[12%] text-center">ESTIMATED</TableHead>
          <TableHead className="w-[19%] text-center">TASK TYPE</TableHead>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell className="w-[30px]">
                <div className="flex items-center justify-center">
                  <input type="checkbox" />
                </div>
              </TableCell>
              <TableCell className="w-[45%]">{task.name}</TableCell>
              <TableCell className="w-[17%]">
                <div className="flex items-center justify-center">
                  <div
                    className={`inline-flex h-6 items-center rounded px-2.5 py-0.5 text-xs font-medium text-white  ${getStatusColor(
                      task.status
                    )}`}
                  >
                    {task.status}
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-[12%]">
                <div className="flex items-center justify-center">
                  <div className={`h-2 w-2 rounded-full ${getPriorityColor(task.priority)}`} />
                </div>
              </TableCell>
              <TableCell className="w-[12%]">
                <div className="flex items-center justify-center">
                  {/* <Badge>{task.estimated}</Badge> */}
                  <span className="text-xs font-medium">{task.estimated}</span>
                </div>
                {/* {task.estimated} */}
              </TableCell>
              <TableCell className="w-[19%]">
                <div className="flex items-center justify-center">
                  <Badge className={`${getTypeColor(task.type)} text-white`}>{task.type}</Badge>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )

  return (
    <div className="space-y-6 p-6">
      <TaskTable tasks={tasks} title="Work To Do Today" />
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-red-500">
          <Star className="h-4 w-4 fill-current" />
          <span className="font-medium">Delayed</span>
        </div>
        <div className="text-sm text-muted-foreground">
          First, please change the deadline of the delayed task to a reset or cancel it.
        </div>
        <TaskTable tasks={delayedTasks} title="" />
      </div>
    </div>
  )
}

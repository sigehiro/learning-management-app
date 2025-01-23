import axios from 'axios'
import { Task } from './types'
// import { Task, NewTask } from './types';

export const fetchTasks = async (): Promise<Task[]> => {
  const res = await axios.get<Task[]>('http://localhost:3031/tasks')
  return res.data
}

// 新しいAPI呼び出し関数の追加例
// export const createTask = async (newTask: NewTask): Promise<Task> => {
// export const createTask = async (newTask: NewTask): Promise<Task> => {
// export const createTask = async (newTask: NewTask): Promise<Task> => {
//   const res = await axios.post<Task>('http://localhost:3031/tasks', newTask);
//   return res.data;
// };

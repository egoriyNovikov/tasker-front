import client from './client'

import type {
  Task,
  TaskCreateRequest,
  TaskCreateResponse,
  TaskDeleteRequest,
  TaskDeleteResponse,
} from '../types/task'

export const getTasks = async (): Promise<Task[]> => {
  const response = await client.get('api/tasks')
  return response.data
}

export const createTask = async (request: TaskCreateRequest): Promise<TaskCreateResponse> => {
  const response = await client.post('api/tasks', request)
  console.log(response)
  return response.data
}

export const deleteTask = async (request: TaskDeleteRequest): Promise<TaskDeleteResponse> => {
  const response = await client.delete(`api/tasks/${request.id}`)
  console.log(response)
  return response.data
}

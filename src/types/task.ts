type Task = {
  id: number
  title: string
  description: string
  due_at: string
  user_id: number
  completed_at: string | null
  created_at: string
  updated_at: string
}

type GetTasksResponse = {
  data: Task[]
}

type TaskCreateRequest = {
  title: string
  description: string
  due_at: string
}

type TaskCreateResponse = Task

type TaskDeleteRequest = {
  id: number
}

type TaskDeleteResponse = {
  message: string
  id: number
}

export type {
  GetTasksResponse,
  Task,
  TaskCreateRequest,
  TaskCreateResponse,
  TaskDeleteRequest,
  TaskDeleteResponse,
}

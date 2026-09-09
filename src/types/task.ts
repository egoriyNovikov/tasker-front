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

type ToggleTaskRequest = {
  id: number
  completed_at: Date | null
}

type ToggleTaskResponse = Task
export type {
  GetTasksResponse,
  Task,
  TaskCreateRequest,
  TaskCreateResponse,
  TaskDeleteRequest,
  TaskDeleteResponse,
  ToggleTaskRequest,
  ToggleTaskResponse,
}

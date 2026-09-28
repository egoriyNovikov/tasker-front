import { defineStore } from 'pinia'
import { createTask, deleteTask, getTasks, interpretTask, toggleTask } from '../api/tasks'
import type {
  InterpretTaskRequest,
  Task,
  TaskCreateRequest,
  TaskDeleteRequest,
  ToggleTaskRequest,
} from '../types/task'

const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [] as Task[],
  }),
  actions: {
    async fetchTasks() {
      const response = await getTasks()
      console.log(response)

      this.tasks = response
    },
    async createTask(request: TaskCreateRequest) {
      const task = await createTask(request)

      this.tasks.push(task)
    },
    async deleteTask(request: TaskDeleteRequest) {
      const response = await deleteTask(request)
      this.tasks = this.tasks.filter((task) => task.id !== request.id)
    },
    async toggleTask(request: ToggleTaskRequest) {
      const updatedTask = await toggleTask(request)
      this.tasks = this.tasks.map((task) => (task.id === request.id ? updatedTask : task))
    },
    async interpretTask(request: InterpretTaskRequest) {
      const response = await interpretTask(request)
      return response
    },
  },
  getters: {
    getTasks: (state) => state.tasks,
  },
})

export { useTasksStore as default }

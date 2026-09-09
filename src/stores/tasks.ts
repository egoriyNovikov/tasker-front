import { defineStore } from 'pinia'
import { createTask, deleteTask, getTasks } from '../api/tasks'
import type { Task, TaskCreateRequest, TaskDeleteRequest } from '../types/task'

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
  },
  getters: {
    getTasks: (state) => state.tasks,
  },
})

export { useTasksStore as default }

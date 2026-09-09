<script setup lang="ts">
import ParticlesCanvas from '@/components/tasks/ParticlesCanvas.vue'
import TaskHeader from '@/components/tasks/TaskHeader.vue'
import TaskInput from '@/components/tasks/TaskInput.vue'
import TaskList from '@/components/tasks/TaskList.vue'
import useTasksStore from '@/stores/tasks.ts'
import { onMounted } from 'vue'
const tasksStore = useTasksStore()

onMounted(async () => {
  await tasksStore.fetchTasks()
  console.log(tasksStore.tasks)
})

const addTask = async (text: string) => {
  await tasksStore.createTask({ title: text, description: '', due_at: new Date().toISOString() })
  tasksStore.tasks = tasksStore.tasks
}

const removeTask = async (id: number) => {
  await tasksStore.deleteTask({ id })
  tasksStore.tasks = tasksStore.tasks
}
const toggleTask = async (id: number) => {
  const task = tasksStore.tasks.find((task) => task.id === id)
  if (!task) return
  await tasksStore.toggleTask({
    id,
    completed_at: task.completed_at ? null : new Date(),
  })
  void id
}
</script>

<template>
  <div class="page">
    <ParticlesCanvas />

    <div class="content">
      <TaskHeader />
      <TaskList :tasks="tasksStore.tasks" @toggle="toggleTask" @remove="removeTask" />
    </div>

    <TaskInput @add="addTask" />
  </div>
</template>

<style scoped>
.page {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.content {
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 20px 0;
  overflow: hidden;
}
</style>

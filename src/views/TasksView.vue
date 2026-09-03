<script setup lang="ts">
import ParticlesCanvas from '@/components/tasks/ParticlesCanvas.vue'
import TaskHeader from '@/components/tasks/TaskHeader.vue'
import TaskInput from '@/components/tasks/TaskInput.vue'
import TaskList from '@/components/tasks/TaskList.vue'
import type { Task } from '@/types/task'
import { ref } from 'vue'

const tasks = ref<Task[]>([
  { id: 1, text: 'Собрать базовую разметку', done: true },
  { id: 2, text: 'Подключить Pinia-стор задач', done: false },
  { id: 3, text: 'Добавить анимацию частиц', done: false },
])

function addTask(text: string) {
  // TODO (завтра): добавить через стор
  void text
}

function toggleTask(id: number) {
  // TODO (завтра): переключить через стор
  void id
}

function removeTask(id: number) {
  // TODO (завтра): удалить через стор
  void id
}
</script>

<template>
  <div class="page">
    <ParticlesCanvas />

    <div class="content">
      <TaskHeader />
      <TaskList :tasks="tasks" @toggle="toggleTask" @remove="removeTask" />
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

<script setup lang="ts">
import type { Task } from '@/types/task'
import TaskItem from './TaskItem.vue'

defineProps<{
  tasks: Task[]
}>()

defineEmits<{
  toggle: [id: number]
  remove: [id: number]
}>()
</script>

<template>
  <div class="task-list">
    <p v-if="tasks.length === 0" class="empty">Нет задач. Добавь первую!</p>
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @toggle="$emit('toggle', task.id)"
      @remove="$emit('remove', task.id)"
    />
  </div>
</template>

<style scoped>
.task-list {
  width: var(--content-width);
  max-width: 90vw;
  flex: 1;
  overflow-y: auto;
  padding-right: 4px;
  margin-bottom: 16px;
}

.task-list::-webkit-scrollbar {
  width: 6px;
}

.task-list::-webkit-scrollbar-thumb {
  background: var(--input-border);
  border-radius: 3px;
}

.empty {
  text-align: center;
  color: var(--dim);
  padding: 80px 0;
  font-size: 15px;
}
</style>

<script setup lang="ts">
import type { Task } from '@/types/task'

defineProps<{
  task: Task
}>()

defineEmits<{
  toggle: []
  remove: []
}>()
</script>

<template>
  <div
    class="task"
    :class="{
      done: task.completed_at,
      overdue: task.completed_at && new Date(task.due_at) < new Date(),
    }"
  >
    <input type="checkbox" :checked="task.completed_at" @change="$emit('toggle')" />
    <span
      >{{ task.title }}
      <span class="due-at">{{ new Date(task.due_at).toLocaleDateString('ru-RU') }}</span></span
    >
    <button type="button" aria-label="Удалить задачу" @click="$emit('remove')">×</button>
  </div>
</template>

<style scoped>
.task {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  margin-bottom: 10px;
  background: rgba(22, 22, 42, 0.9);
  border: 1px solid var(--border);
  border-radius: 14px;
}

.task:hover {
  border-color: var(--border-hover);
}

.task input[type='checkbox'] {
  width: 22px;
  height: 22px;
  accent-color: var(--accent);
  cursor: pointer;
  flex-shrink: 0;
}

.task span {
  flex: 1;
  font-size: 16px;
}

.task span .due-at {
  font-size: 12px;
  color: var(--dim);
}

.task.done span {
  text-decoration: line-through;
  color: var(--dim);
}

.task.overdue span {
  color: var(--danger);
}

.task button {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: none;
  border: none;
  color: var(--danger);
  cursor: pointer;
  font-size: 18px;
  opacity: 0;
  transition: 0.2s;
}

.task:hover button {
  opacity: 1;
}

.task button:hover {
  background: rgba(255, 107, 107, 0.1);
}
</style>

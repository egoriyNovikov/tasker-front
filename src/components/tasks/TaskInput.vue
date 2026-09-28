<script setup lang="ts">
import useNotificationStore from '@/stores/notification'
import useTasksStore from '@/stores/tasks'
import { ref } from 'vue'
const emit = defineEmits<{
  add: [text: string, due_at: string]
}>()
const notificationStore = useNotificationStore()

const text = ref('')
const due_at = ref('')
const isRecognizing = ref(false)

function submit() {
  const value = text.value.trim()
  if (!value) return
  const date = due_at.value || new Date().toISOString()
  emit('add', value, date)
  text.value = ''
  due_at.value = ''
}

const tasksStore = useTasksStore()
const interpretTask = async (transcript: string, confidence: number) => {
  const response = await tasksStore.interpretTask({
    text: transcript,
    confidence: confidence,
  })
  if (response.action !== 'create_task') {
    notificationStore.info(response.message ?? 'Не удалось определить задачу')
    return
  }
  emit('add', response?.title, response?.due_at)
  notificationStore.success('Задача добавлена')
}

function startRecognition() {
  const recognition = new webkitSpeechRecognition()

  recognition.lang = 'ru-RU'

  recognition.onstart = () => {
    isRecognizing.value = true
  }

  recognition.onend = () => {
    isRecognizing.value = false
  }

  recognition.onresult = (event: SpeechRecognitionEvent) => {
    console.log(event.results[0][0])
    interpretTask(event.results[0][0].transcript, event.results[0][0].confidence)
  }

  recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
    console.error('Speech recognition error:', event.error)
  }

  recognition.start()
}

function handleSubmit() {
  if (text.value) {
    submit()
  } else {
    startRecognition()
  }
}
</script>

<template>
  <form class="input-bar" @submit.prevent="handleSubmit">
    <div class="input-wrap">
      <input v-model="text" placeholder="Что нужно сделать?" />
      <input class="input-date" type="datetime-local" v-model="due_at" />
      <button type="submit" aria-label="Добавить задачу">
        {{ text ? '+' : isRecognizing ? '🔴' : '🎙️' }}
      </button>
    </div>
  </form>
</template>

<style scoped>
.input-bar {
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 14px 20px 18px;
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
}
.input-wrap {
  width: var(--content-width);
  max-width: 90vw;
  margin: 0 auto;
  display: flex;
  gap: 12px;
}

.input-wrap input {
  flex: 1;
  min-width: 0;
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  border-radius: 14px;
  padding: 16px 20px;
  color: var(--text);
  font-size: 16px;
  outline: none;
}

.input-date {
  flex: 0 0 180px !important;
  padding: 16px 14px !important;
}

.input-wrap input:focus {
  border-color: var(--accent);
}

.input-wrap button {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: var(--accent);
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 24px;
  transition: transform 0.2s;
  flex-shrink: 0;
}

.input-wrap button:hover {
  transform: scale(1.05);
}
</style>

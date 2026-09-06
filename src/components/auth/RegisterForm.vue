<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
const authStore = useAuthStore()
const email = ref('')
const password = ref('')
const name = ref('')
const emit = defineEmits<{
  register: []
}>()

const submitAuth = async () => {
  await authStore.register({
    email: email.value,
    password: password.value,
    name: name.value,
  })
  emit('register')
}
</script>
<template>
  <form class="auth-form" @submit.prevent="submitAuth">
    <!-- Email -->
    <label>
      Email
      <input v-model="email" type="email" placeholder="you@example.com" required />
    </label>

    <!-- Пароль -->
    <label>
      Пароль
      <input v-model="password" type="password" placeholder="••••••••" required minlength="6" />
    </label>

    <!-- Имя — только при регистрации -->
    <label>
      Имя
      <input v-model="name" type="text" placeholder="Как тебя зовут?" />
    </label>

    <!-- Отправка формы -->
    <button class="auth-submit" type="submit">Зарегистрироваться</button>
  </form>
</template>

<style scoped>
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.auth-form label {
  color: #a0a0cc;
  font-size: 13px;
}
.auth-form input {
  width: 100%;
  height: 44px;
  margin-top: 6px;
  padding: 0 13px;
  background: #252545;
  border: 1px solid #3a3a5a;
  border-radius: 11px;
  color: #e0e0ff;
  outline: none;
  font-size: 14px;
}
.auth-form input:focus {
  border-color: #6366f1;
}
.auth-submit {
  height: 46px;
  margin-top: 6px;
  border: 0;
  border-radius: 12px;
  background: #6366f1;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}
.auth-submit:hover {
  background: #7476f5;
}
</style>

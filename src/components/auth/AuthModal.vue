<script setup lang="ts">
import { ref } from 'vue'
import LoginForm from './LoginForm.vue'
import RegisterForm from './RegisterForm.vue'

const mode = ref<'login' | 'register'>('login')

const isOpen = defineModel<boolean>('isOpen')
const closeAuth = () => {
  isOpen.value = false
}

const setMode = (newMode: 'login' | 'register') => {
  mode.value = newMode
}
</script>

<template>
  <!-- Авторизационное окно -->
  <div v-if="isOpen" class="auth-overlay" @click.self="closeAuth">
    <div class="auth-modal">
      <!-- Заголовок и описание -->
      <div class="auth-head">
        <div>
          <h2>{{ mode === 'login' ? 'Вход' : 'Регистрация' }}</h2>

          <p>
            {{
              mode === 'login'
                ? 'Войди, чтобы синхронизировать задачи'
                : 'Создай аккаунт, чтобы синхронизировать задачи'
            }}
          </p>
        </div>

        <!-- Кнопка закрытия -->
        <button class="auth-close" type="button" aria-label="Закрыть" @click="closeAuth">×</button>
      </div>

      <!-- Переключатель Вход / Регистрация -->
      <div class="auth-tabs">
        <button
          class="auth-tab"
          :class="{ active: mode === 'login' }"
          type="button"
          @click="setMode('login')"
        >
          Войти
        </button>

        <button
          class="auth-tab"
          :class="{ active: mode === 'register' }"
          type="button"
          @click="setMode('register')"
        >
          Регистрация
        </button>
      </div>

      <LoginForm v-if="mode === 'login'" />
      <RegisterForm v-if="mode === 'register'" />

      <!-- Дополнительная информация -->
      <div class="auth-note">Авторизация будет подключена к API Tasker.</div>
    </div>
  </div>
</template>

<style scoped>
.auth-overlay {
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(7, 7, 15, 0.72);
  backdrop-filter: blur(6px);
}

.auth-modal {
  width: 390px;
  max-width: 100%;
  background: #16162a;
  border: 1px solid #3a3a5a;
  border-radius: 20px;
  padding: 26px;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.45);
  animation: modal-in 0.2s ease-out;
}
@keyframes modal-in {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.98);
  }
}
.auth-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 22px;
}
.auth-head h2 {
  font-size: 22px;
  color: #f0f0ff;
}
.auth-head p {
  margin-top: 4px;
  color: #8888aa;
  font-size: 13px;
}
.auth-close {
  width: 32px;
  height: 32px;
  border: 0;
  border-radius: 9px;
  background: transparent;
  color: #8888aa;
  cursor: pointer;
  font-size: 22px;
}
.auth-close:hover {
  background: #252545;
  color: #fff;
}
.auth-tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  padding: 4px;
  margin-bottom: 20px;
  background: #10101d;
  border-radius: 12px;
}
.auth-tab {
  border: 0;
  border-radius: 9px;
  padding: 10px;
  background: transparent;
  color: #8888aa;
  cursor: pointer;
  font-size: 14px;
}
.auth-tab.active {
  background: #252545;
  color: #fff;
}
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
.auth-note {
  margin-top: 14px;
  text-align: center;
  color: #666699;
  font-size: 12px;
}
</style>

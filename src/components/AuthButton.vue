<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
import AuthModal from './auth/AuthModal.vue'
import UserMenu from './UserMenu.vue'
const authStore = useAuthStore()

const isOpen = ref(false)
const isUserMenuOpen = ref(false)

const handleClick = () => {
  if (authStore.isAuthenticated) {
    isUserMenuOpen.value = !isUserMenuOpen.value
    return
  }

  isOpen.value = true
}
</script>

<template>
  <div class="auth-wrapper">
    <button class="auth-button" type="button" @click="handleClick">
      <svg viewBox="0 0 24 24">
        <path d="M20 21a8 8 0 0 0-16 0" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </button>
    <AuthModal v-if="!authStore.isAuthenticated" v-model:isOpen="isOpen" />
    <UserMenu v-if="authStore.isAuthenticated && isUserMenuOpen" />
  </div>
</template>

<style scoped>
.auth-wrapper {
  position: relative;
  margin-top: auto;
}
.auth-button {
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.auth-button:hover {
  background: #252545;
}
.auth-button svg {
  width: 21px;
  height: 21px;
  stroke: #a0a0cc;
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.auth-button:hover svg {
  stroke: #fff;
}
</style>

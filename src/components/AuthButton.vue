<script setup lang="ts">
import { ref } from 'vue'
import AuthModal from './auth/AuthModal.vue'

const isOpen = ref(false)

const openAuth = () => {
  isOpen.value = true
}
</script>

<template>
  <button class="auth-button" type="button" @click="openAuth">
    <svg viewBox="0 0 24 24">
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  </button>
  <AuthModal v-model:isOpen="isOpen" />
</template>

<style scoped>
.auth-button {
  width: 44px;
  height: 44px;
  margin-top: auto;
  border: 0;
  border-radius: 12px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s;
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

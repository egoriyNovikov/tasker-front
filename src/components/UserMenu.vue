<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()

const logout = () => {
  authStore.logout()
}
</script>

<template>
  <div class="user-menu">
    <div class="user-name">{{ authStore.user?.name ?? authStore.user?.email }}</div>

    <div class="menu-divider"></div>

    <button>Профиль</button>
    <button>Настройки</button>
    <button @click="logout">Выйти</button>
  </div>
</template>

<style scoped>
.user-menu {
  position: fixed;
  bottom: 52px;

  width: 180px;
  padding: 8px;
  background: #252545;
  border: 1px solid #3a3a5a;
  border-radius: 10px;
}

.user-name {
  padding: 8px;
  font-weight: 600;
}

.menu-divider {
  border-top: 1px solid #3a3a5a;
  margin: 4px 0;
}

.user-menu button {
  width: 100%;
  padding: 8px;
  border: 0;
  background: none;
  color: #e0e0ff;
  text-align: left;
  border-radius: 6px;
  cursor: pointer;
}

.user-menu button:hover {
  background: #30305a;
}
</style>

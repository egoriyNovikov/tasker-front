<script setup lang="ts">
import IconNotification from '@/components/IconNotification.vue'
import useNotificationStore from '@/stores/notification'
const notificationStore = useNotificationStore()

const icons = {
  success: 'check-circle',
  error: 'x-circle',
  info: 'info-circle',
  warning: 'warning-circle',
} as const
</script>

<template>
  <div
    v-if="notificationStore.notification"
    class="notification"
    :class="notificationStore.notification.type"
  >
    <div class="notification-content">
      <div class="notification-icon">
        <IconNotification :name="icons[notificationStore.notification.type]" />
      </div>

      <div class="notification-message">
        {{ notificationStore.notification.message }}
      </div>

      <button type="button" class="notification-close" @click="notificationStore.clearNotification">
        <IconNotification name="x-circle" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.notification {
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 1000;
}

.notification-content {
  display: flex;
  align-items: center;
  gap: 12px;

  min-width: 280px;
  max-width: 400px;
  padding: 14px 16px;

  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 12px;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
}

.notification-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.notification-message {
  flex: 1;
  font-size: 14px;
  line-height: 1.4;
}

.notification.success {
  border-color: #4ade80;
}

.notification.error {
  border-color: #f87171;
}

.notification.info {
  border-color: #60a5fa;
}

.notification.warning {
  border-color: #facc15;
}

.notification.success .notification-icon {
  color: #4ade80;
}

.notification.error .notification-icon {
  color: #f87171;
}

.notification.info .notification-icon {
  color: #60a5fa;
}

.notification.warning .notification-icon {
  color: #facc15;
}

.notification-close {
  width: 24px;
  height: 24px;
  padding: 0;

  border: none;
  background: none;

  color: var(--dim);
  cursor: pointer;
  flex-shrink: 0;
}

.notification-close:hover {
  color: var(--color-text);
}
</style>

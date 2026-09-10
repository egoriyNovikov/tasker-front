import type { Notification } from '@/types/notification'
import { defineStore } from 'pinia'

const useNotificationStore = defineStore('notification', {
  state: () => ({
    notification: null as Notification | null,
  }),
  actions: {
    showNotification(notification: Notification) {
      this.notification = notification
    },
    success(message: string) {
      this.showNotification({ type: 'success', message })
    },
    error(message: string) {
      this.showNotification({ type: 'error', message })
    },
    info(message: string) {
      this.showNotification({ type: 'info', message })
    },
    warning(message: string) {
      this.showNotification({ type: 'warning', message })
    },
    clearNotification() {
      this.notification = null
    },
  },
})

export default useNotificationStore

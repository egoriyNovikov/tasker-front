export type NotificationType = 'success' | 'error' | 'info' | 'warning'

export type Notification = {
  type: NotificationType
  message: string
}

import { defineStore } from 'pinia'
import { getMe, login, logout, register } from '../api/auth'
import type { LoginCredentials, RegisterCredentials } from '../types/auth'
import type { User } from '../types/user'

const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    token: null as string | null,
  }),
  actions: {
    async login(credentials: LoginCredentials) {
      const response = await login(credentials)
      this.token = response.access_token
      localStorage.setItem('token', response.access_token)
    },
    async register(credentials: RegisterCredentials) {
      const response = await register(credentials)
      console.log(response)
    },
    async logout() {
      const response = await logout()
      this.token = null
      localStorage.removeItem('token')
      this.user = null
      localStorage.removeItem('user')
    },
    async me() {
      const response = await getMe()
      this.user = response
      localStorage.setItem('user', JSON.stringify(response))
      console.log(response)
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
})

export { useAuthStore }
export default useAuthStore

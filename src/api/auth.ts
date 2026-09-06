import client from './client'

import type {
  LoginCredentials,
  LoginResponse,
  LogoutResponse,
  MeResponse,
  RegisterCredentials,
  RegisterResponse,
} from '../types/auth'

export const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const response = await client.post('/api/login', credentials)
  return response.data
}

export const register = async (credentials: RegisterCredentials): Promise<RegisterResponse> => {
  const response = await client.post('/api/register', credentials)
  return response.data
}

export const logout = async (): Promise<LogoutResponse> => {
  const response = await client.post('/api/logout')
  return response.data
}

export const getMe = async (): Promise<MeResponse> => {
  const response = await client.get('/api/me')
  return response.data
}

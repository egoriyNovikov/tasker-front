type LoginCredentials = {
  email: string
  password: string
}

type RegisterCredentials = {
  email: string
  password: string
  name: string
}

type LoginResponse = {
  message: string
  id: number
  access_token: string
  token_type: string
}

type RegisterResponse = {
  message: string
  id: number
}

type MeResponse = {
  id: number
  name: string
  email: string
}

type LogoutResponse = {
  message: string
}
type ValidationError = {
  message: string
  errors: Record<string, string[]>
}

export type {
  LoginCredentials,
  LoginResponse,
  LogoutResponse,
  MeResponse,
  RegisterCredentials,
  RegisterResponse,
  ValidationError,
}

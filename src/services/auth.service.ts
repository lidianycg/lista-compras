import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../firebase'

export const signUp = async (email: any, password: any) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )
    return userCredential.user // Retorna o usuário criado
  } catch (error) {
    if (error instanceof Error) {
      console.error('Erro ao criar usuário:', error.message)
    } else {
      console.error('Erro ao criar usuário:', error)
    }
    throw error
  }
}

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    )
    return userCredential.user // Retorna o usuário logado
  } catch (error) {
    if (error instanceof Error) {
      console.error('Erro ao fazer login:', error.message)
    } else {
      console.error('Erro ao fazer login:', error)
    }
    throw error
  }
}

<template>
  <div class="login-page">
    <div class="image">
      <img
        src="@/assets/shopping_cart.svg"
        alt="Imagem de uma mulher com um carrinho de compras"
      />
    </div>
    <div class="login-form">
      <img src="@/assets/logo.svg" alt="" class="logo" />
      <h3>Entrar</h3>
      <div class="login-form">
        <input type="email" placeholder="Email" v-model="email" />
        <input type="password" placeholder="Senha" v-model="password" />
        <button @click="handleSignIn()">Entrar</button>
        <div class="sign-up">
          <p>Não tem uma conta?</p>
          <button @click="handleSignUp()">Cadastrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signIn } from '@/services/auth.service'

const router = useRouter()
const email = ref('')
const password = ref('')

async function handleSignUp() {
  router.push('/signup')
}

async function handleSignIn() {
  try {
    await signIn(email.value, password.value)
    router.push('/shopping-list')
  } catch (error) {
    alert('Erro ao fazer login: ' + error)
  }
}
</script>

<style scoped lang="scss">
.login-page {
  height: 100vh;
  display: flex;
  .image {
    background-color: #6c63ff5c;
    width: 50%;
    display: flex;
    justify-content: center;
    img {
      width: 400px;
    }
  }
  .login-form {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 24px 16px;
    .logo {
      width: 300px;
      margin-bottom: 24px;
    }
    .login-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      input {
        margin-bottom: 8px;
        padding: 12px 8px;
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 80%;
      }
      button {
        padding: 10px;
        border: none;
        border-radius: 8px;
        background-color: #6c63ff;
        color: white;
        cursor: pointer;
        width: 80%;
        margin-top: 8px;
      }
      .sign-up {
        margin-top: 16px;
        display: flex;
        align-items: center;
        p {
          text-wrap: nowrap;
        }
        button {
          background-color: transparent;
          border: none;
          color: #6c63ff;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

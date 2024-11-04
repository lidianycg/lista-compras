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
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  </div>
</template>
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
    form {
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
    }
  }
}
</style>

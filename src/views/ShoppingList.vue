<template>
  <div class="shopping-list">
    <h2>Lista de Compras</h2>

    <div class="add-items">
      <input
        v-model="newItemName"
        @input="fetchSuggestions"
        placeholder="Nome do item"
      />

      <button @click="addItem">Adicionar</button>
      <button @click="exportToWhatsapp">Exportar Lista</button>
    </div>

    <div class="suggestions">
      <ul v-if="suggestions.length">
        <li
          v-for="(suggestion, index) in suggestions"
          :key="index"
          @click="selectSuggestion(suggestion.name)"
        >
          {{ suggestion.name }}
        </li>
      </ul>
    </div>

    <div class="list">
      <ul>
        <li v-for="(item, index) in shoppingList" :key="index">
          <span class="item-name">{{ item.name }}</span>

          <div class="actions">
            <button
              @click="decreaseQuantity(index)"
              :disabled="item.quantity <= 1"
              class="decrease button"
            >
              <span class="material-symbols-outlined">remove</span>
            </button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(index)" class="increase button">
              <span class="material-symbols-outlined">add</span>
            </button>
            <button @click="removeItem(index)" class="remove button">
              <span class="material-symbols-outlined">delete</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { app } from '../firebase'

const db = getFirestore(app)

interface ShoppingItem {
  name: string
  quantity: number
}

const shoppingList = ref<ShoppingItem[]>([])
const newItemName = ref<string>('')
const newItemQuantity = ref<number>(1)
const suggestions = ref<{ name: string }[]>([])

const fetchSuggestions = async () => {
  if (newItemName.value.length < 2) {
    suggestions.value = []
    return
  }

  const itemsRef = collection(db, 'items')

  const querySnapshot = await getDocs(itemsRef)
  const items = querySnapshot.docs.map(doc => doc.data() as { name: string })

  suggestions.value = items.filter(item =>
    item.name.toLowerCase().includes(newItemName.value.toLowerCase()),
  )
}

const addItem = () => {
  if (newItemName.value && newItemQuantity.value > 0) {
    shoppingList.value.push({
      name: newItemName.value,
      quantity: newItemQuantity.value,
    })
    newItemName.value = ''
    newItemQuantity.value = 1
    suggestions.value = []
  }
}

// Seleciona uma sugestão ao clicar nela
const selectSuggestion = (name: string) => {
  newItemName.value = name
  suggestions.value = []
  shoppingList.value.push({
    name,
    quantity: newItemQuantity.value,
  })
  newItemName.value = ''
}

const increaseQuantity = (index: number) => {
  shoppingList.value[index].quantity++
}

const decreaseQuantity = (index: number) => {
  if (shoppingList.value[index].quantity > 1) {
    shoppingList.value[index].quantity--
  }
}

const removeItem = (index: number) => {
  const confirm = window.confirm('Deseja remover este item?')
  if (!confirm) return
  shoppingList.value.splice(index, 1)
}

const exportToWhatsapp = () => {
  const title = 'Lista de Compras:%0A%0A'
  const message = shoppingList.value
    .map(item => `${item.name} - ${item.quantity}`)
    .join('%0A')

  window.open(`https://wa.me/?text=${title}${message}`)
}
</script>

<style scoped lang="scss">
.shopping-list {
  max-width: 480px;
  margin: 0 auto;
  h2 {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 32px;
  }

  .add-items {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 16px;

    input {
      padding: 8px;
      border-radius: 4px;
      border: 1px solid #ccc;
    }

    button {
      padding: 8px;
      border-radius: 4px;
      background-color: #6c63ff;
      color: white;
      border: none;
      cursor: pointer;
    }
  }

  .suggestions {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        padding: 8px;
        border: 1px solid #ccc;
        border-top: none;
        cursor: pointer;
        &:hover {
          background-color: #f0f0f0;
        }
      }
    }
  }

  .list {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        border-bottom: 1px solid #ccc;

        .item-name {
          flex: 1;
        }

        .actions {
          display: flex;
          gap: 8px;
          align-items: center;
          margin-left: 8px;
          .button {
            padding: 4px;
            border-radius: 4px;
            border: none;
            cursor: pointer;
            background-color: transparent;
          }

          .increase {
            color: #6c63ff;
          }

          .decrease {
            color: #222222;
            &:disabled {
              color: #ccc;
            }
          }

          .remove {
            color: #f8583c;
          }
        }
      }
    }
  }
}
</style>

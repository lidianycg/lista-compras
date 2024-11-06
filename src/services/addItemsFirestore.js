import { db } from '../firebase'
import { collection, setDoc, doc } from 'firebase/firestore'
import { itemsData } from '../data/data'

export const addItemsToFirestore = async () => {
  try {
    const itemsCollection = collection(db, 'items')
    for (const [category, items] of Object.entries(itemsData)) {
      for (const [subcategory, subitems] of Object.entries(items)) {
        if (Array.isArray(subitems)) {
          for (const item of subitems) {
            const itemRef = doc(itemsCollection)
            await setDoc(itemRef, {
              category,
              subcategory,
              name: item.name,
              types: item.types,
            })
          }
        }
      }
    }
    console.log('Todos os itens foram adicionados ao Firestore!')
  } catch (error) {
    console.error('Erro ao adicionar itens ao Firestore:', error)
  }
}

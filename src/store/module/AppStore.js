import { defineStore } from 'pinia'
import { ref } from 'vue'

const AppStore = defineStore('appStore' , () => {
  const tempValue = ref(0)
  const updateTempValue = (payload) => {
    tempValue.value = payload
  }
  return {
    tempValue,
    updateTempValue
  }
})

export default AppStore

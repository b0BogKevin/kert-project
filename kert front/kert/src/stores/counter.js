import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const novenyek = ref([])
const loadAll = () => {
    fetch("http://localhost:3000",{mode:"no-cors"})
    .then(resp => resp.json())
    .then(data =>{ novenyek.value = data
      console.log(novenyek.value);
      
    })
  }
  return { novenyek, loadAll}
})

<script setup>
import { ref,onMounted } from 'vue';

const novenyek = ref([])
const loadAll = () => {
    fetch("http://localhost:3000/plants")
    .then(resp => resp.json())
    .then(data => novenyek.value = data)
  }
onMounted(()=>{
  loadAll()
})
</script>

<template>
  <div class="content">
 <div v-for="n in novenyek" class="kartya">
  <div>{{ n.nev }}</div>
  <div>{{ n.ar }} Ft</div> 
  <div v-if="n.evelo">Évelő</div>
  <div v-else>Nem évelő</div>
  <div>{{ n.tipus }}</div> 
 </div>
</div>

<form action="">

  
</form>
</template>

<style scoped>
.kartya{
  margin: 20px;
}
.content{
  display: flex;
  flex-wrap: wrap;
}
</style>

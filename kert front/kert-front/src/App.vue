<script setup>
import { ref,onMounted } from 'vue';
import { RouterLink } from 'vue-router';

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
  <RouterLink to="/form">Új növény</RouterLink>
  <RouterLink to="/">Lista</RouterLink>
<RouterView></RouterView>
</template>



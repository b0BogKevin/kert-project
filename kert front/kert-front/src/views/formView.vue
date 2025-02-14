<template>

    <input v-model="name" type="text" name="name" id="" placeholder="Név">
    <select v-model="tipus" name="tipus" id="">
        <option value="fa">Fa</option>
        <option value="virag">Virág</option>
        <option value="bokor">Bokor</option>
    </select>
    <input type="checkbox" name="" v-model="evelo" id="">
    <input v-model="ar" type="number" name="name" id="" placeholder="Ár">
    <button v-on:click="send">Küldés</button>

</template>
<script setup>
import { ref } from 'vue';

const name = ref()
const tipus = ref()
const evelo = ref()
const ar = ref()

const send = ()=>{
    fetch("http://localhost:3000/plants",
    {
        method:"POST",
        body:JSON.stringify(
            {
                nev: name.value,
                kategoria:tipus.value,
                evelo:evelo.value,
                ar:ar.value
            }
        ),  
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }

    })
    .then(resp => resp.json())
}
</script>
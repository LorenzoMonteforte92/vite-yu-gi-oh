<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppCardDisplay from './components/AppCardDisplay.vue';
import AppSelect from './components/AppSelect.vue';


export default {
  components: {
    AppHeader,
    AppCardDisplay,
    AppSelect,

  },

  data() {
    return {
      store
    };
  },
  
  methods: {
    getCardsFromApi(){
      const queryParams = {
        num: 20,
        offset: 0,
      }

    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?', {
      params: queryParams
    })
      .then((response) => {
        store.yugiCards = response.data.data; 
             
      });
    },

    getArchetypesFromApi(){
    axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
      .then((response) => {
        store.archetypes = response.data     
      });
    },
  },
  // 
  

  mounted() {
   this.getCardsFromApi(),
   this.getArchetypesFromApi()
  },
}
</script>

<template>
  <AppHeader></AppHeader>
  <main class="py-4" >
    <AppSelect @selectedArchetype = "getCardsFromApi" ></AppSelect>
    <AppCardDisplay></AppCardDisplay>
  </main>
</template>

<style>
main{
  background-color: #D48F38;
}
</style>
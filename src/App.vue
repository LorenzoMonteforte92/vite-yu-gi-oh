<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppCardDisplay from './components/AppCardDisplay.vue';

export default {
  components: {
    AppHeader,
    AppCardDisplay,

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
        console.log(store.yugiCards[0].card_images)       
      });
    }
  },

  mounted() {
   this.getCardsFromApi()
  },
}
</script>

<template>
  <AppHeader></AppHeader>
  <main class="py-4" >
    <AppCardDisplay></AppCardDisplay>
  </main>
</template>

<style>
main{
  background-color: #D48F38;
}
</style>
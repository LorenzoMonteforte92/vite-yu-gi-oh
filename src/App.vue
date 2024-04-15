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
   
  },
  mounted() {
   
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <main>
    <AppCardDisplay></AppCardDisplay>
  </main>
</template>

<style>
main{
  background-color: #D48F38;
}
</style>
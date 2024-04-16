<script>
import { store } from '../store.js';
    export default {
        name: 'AppCounter',

        data(){
            return{
                store
            }
        },

        methods: {
            
            }
        }
	

    
</script>

<template>
    <div v-if="store.yugiCards.length === 1" class="text-center fs-4"  >La ricerca ha prodotto {{ store.yugiCards.length }} risultato</div>
    <div v-else class="text-center fs-4" >La ricerca ha prodotto {{ store.yugiCards.length }} risultati</div>
</template>

<style scoped lang="scss">

</style>
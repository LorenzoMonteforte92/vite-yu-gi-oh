<script>
import AppCounter from './AppCounter.vue';
import YugiCards from './YugiCards.vue';
import { store } from '../store.js';
    
export default {
        name: 'AppCardDisplay',
        components:{
            YugiCards,
            AppCounter
        },

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
   <div class="container">
    <div class="row">
        <div class="col-12 d-flex flex-wrap p-4 gap-3">
            <YugiCards v-for="card in store.yugiCards" :key="card.id" :cardInfo="card"></YugiCards>
        </div>
    </div>
    <AppCounter></AppCounter>
   </div>
</template>

<style scoped lang="scss">
.container{
    background-color: white;

}
</style>
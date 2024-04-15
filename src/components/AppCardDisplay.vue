<script>
import YugiCards from './YugiCards.vue';
    
export default {
        name: 'AppCardDisplay',
        components:{
            YugiCards,
        },

        data(){
            return{
                
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
            <YugiCards></YugiCards>
        </div>
    </div>
   </div>
</template>

<style scoped lang="scss">
.container{
    background-color: white;

}
</style>
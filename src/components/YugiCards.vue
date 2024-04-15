
<script>

export default {
        name: 'YugiCards',
        props: {
            cardInfo: Object
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
    <div class="card mt-3">
        <img :src="cardInfo.card_images[0].image_url" class="card-img-top" :alt="cardInfo.name">
        <div class="card-body d-flex flex-column justify-content-center">
            <h6 class="text-white" >{{ cardInfo.name }}</h6>
            <p class="card-text">{{cardInfo.archetype}}</p>
    </div>
  </div>  
</template>

<style scoped lang="scss">

.card{
    width: calc(100% / 5 - 1rem);
}

.card-body{
    background-color: #D48F38;
    text-align: center;
}

</style>
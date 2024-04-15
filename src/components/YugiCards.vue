
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
        <img src="https://images.saymedia-content.com/.image/t_share/MTc0Mzg2MzUzNTMzMjk4MDI0/yu-gi-ohs-top-6-forbidden-monster-cards.jpg" class="card-img-top" alt="...">
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

img{
        object-fit: cover;
    }

</style>
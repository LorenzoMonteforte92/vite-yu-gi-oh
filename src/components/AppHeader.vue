<script>
    export default {
        name: 'AppHeader',

        data(){
            return{
                
            }
        },
        
        methods: {
            
            }
        }
	

    
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <div class="ms-logo-container" ><img src="https://vignette1.wikia.nocookie.net/yugiohenespanol/images/a/aa/Yugioh_anime_logo.jpg/revision/latest?cb=20130310042737&path-prefix=es" alt=""></div>
                <div class="ms-logo-txt" ><Yu->YU-GI-OH! API</Yu-></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.ms-logo-container{
    width: 10%;
}

img{
        width: 100%
    }

.ms-logo-txt{
    line-height: 3;
}
</style>
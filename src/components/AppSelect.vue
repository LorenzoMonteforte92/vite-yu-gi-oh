<script>
import { store } from '../store.js';
    export default {
        name: 'AppSelect',

        data(){
            return{
                store
            }
        },

        methods: {
            
            },
        }
	

    
</script>

<template>
    <div class="container">
        <select v-model="store.clickedArchetype" name="archetypes" id="">
            <option value="">Select Archetype</option>
            <option 
            v-for="archetype in store.archetypes" 
            :value="archetype.archetype_name"
            @click="$emit('selectedArchetype')">{{ archetype.archetype_name }}</option>
        </select>
    </div>
</template>

<style scoped lang="scss">

</style>

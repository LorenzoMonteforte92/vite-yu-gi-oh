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
        <select v-model="store.clickedArchetype" name="archetypes" id="" @click="$emit('selectedArchetype')" >
            <option value="">Select Archetype</option>
            <option 
            v-for="archetype in store.archetypes" 
            :value="archetype.archetype_name"
            >{{ archetype.archetype_name }}</option>
        </select>
    </div>
</template>

<style scoped lang="scss">

</style>

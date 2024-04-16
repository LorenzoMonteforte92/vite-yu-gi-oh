import { reactive } from "vue";

export const store = reactive({
    yugiCards: [],
    archetypes: [],
    clickedArchetype: ''
});

// appunti
// popolare la select con gli archetipi con v-for
// creare una variabile nello store e collegarla a un v-model al select
// sulla singola option mettere un @click="" con $emit
// in app.vue richiamare l'$emit col suo nome e dargli come parametro la funzione che richiama l'API
// nella funzione fare in modo che avvenga la magia
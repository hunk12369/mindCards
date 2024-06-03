<script setup>

import { ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue';

import { useRoute } from 'vue-router';
import HeaderMaster from '@/components/HeaderMaster.vue';
import NavBar from '@/components/NavBar.vue';

const route = useRoute();
const deck = ref ({});

//simulacion de la data (puede realizar llamada a la API)
const decks = [
    { id: 1, title: 'Mazo 1', date: '20 de mayo, 2024', by: 'Autor 1', nuevas: 15, aprendiendo: 23, repasar: 10},
    { id: 2, title: 'Mazo 2', date: '21 de mayo, 2024', by: 'Autor 2', nuevas: 10, aprendiendo: 30, repasar: 5 },

];

onMounted(() => {
    const deckId = parseInt(route.params.id);
    deck.value = decks.find(d => d.id === deckId);
});


</script>

<template>
    <div class="home-container">
        <HeaderMaster/>
        <div class="a ml-72 mt-24 pr-6">
            <div class="navegation-bar flex gap-2 text-12px items-center justify-start">
                <router-link :to="{ name: 'DecksView' }" class=" font-normal text-navGrey">Mis Mazos</router-link>
                <Icon icon="ep:arrow-right" width="15" height="15"  style="color: #8a8f9d" />
                <router-link :to="{ name: 'DeckDetailsView' }" class=" font-normal text-navGrey">{{ deck.title }}</router-link>
                <Icon icon="ep:arrow-right" width="15" height="15"  style="color: #8a8f9d" />
                <span class=" font-bold ">Editar Flash Cards</span>
            </div>
            <div class="flex items-center p-2 gap-5">
                <h1 class=" font-bold md:text-32px sm:text-24px ">Editar Flash Cards</h1>
                <span class=" font-black md:text-32px sm:text-24px text-navGrey">{{ deck.title }}</span>

            </div>
            <p>Esta es la pagina de EDITAR</p>
        </div>
        <NavBar/>
    </div>
</template>
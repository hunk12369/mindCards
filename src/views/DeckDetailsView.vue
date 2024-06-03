<script setup>

import { ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue';

import { useRoute } from 'vue-router';
import HeaderMaster from '@/components/HeaderMaster.vue';
import NavBar from '@/components/NavBar.vue';
import StudyCant from '@/components/StudyCant.vue';
import BtnAction from '@/components/BtnAction.vue';

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
    <div class="details-container">
        <HeaderMaster/>
        <div class="ml-72 mt-24 pr-6">
            <div class="navegation-bar flex gap-2 text-12px items-center justify-start">
                <router-link :to="{ name: 'DecksView' }" class=" font-normal text-navGrey">Mis Mazos</router-link>
                <Icon icon="ep:arrow-right" width="15" height="15"  style="color: #8a8f9d" />
                <span class=" font-bold ">{{ deck.title }}</span>
            </div>
            <h1 class=" font-bold md:text-32px sm:text-24px pt-2 ">{{ deck.title }}</h1>
            <div class="flashCards-study bg-opacity-20 bg-purpleP p-4 flex rounded-xl gap-7 justify-center m-4 ">
                <StudyCant titleStudy="Nuevas" :cant="deck.nuevas"/>
                <StudyCant titleStudy="Aprendiendo" :cant="deck.aprendiendo"/>
                <StudyCant titleStudy="Repasar" :cant="deck.repasar"/>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
                <router-link :to="{ name: 'CreateDeckView' }" class="w-full">
                    <BtnAction changeIcon="ion:create" titlebtn="Crear Flash Cards"/>
                </router-link>
                <router-link :to="{ name: 'EditDeckView' }" class="w-full">
                    <BtnAction changeIcon="mdi:create" titlebtn="Editar Flash Cards"/>
                </router-link>
                <router-link :to="{ name: 'StudyDeckView' }" class="w-full">
                    <BtnAction changeIcon="hugeicons:study-lamp" titlebtn="Estudiar Flash Cards"/>
                </router-link>
            </div>
        </div>
        <NavBar/>
    </div>
  </template>
<script setup>

import { ref } from 'vue';
import HeaderMaster from '@/components/HeaderMaster.vue'
import NavBar from '@/components/NavBar.vue'
import DecksCard from '@/components/DecksCard.vue'
import ProfileBtn from '@/components/ProfileBtn.vue';
//import { Icon } from '@iconify/vue';

// Estado reactivo para almacenar las tarjetas DecksCard
const decks = ref([
    { id: 1, title: 'Mazo 1', date: '20 de mayo, 2024', by: 'Autor 1' },
    { id: 2, title: 'Mazo 2', date: '21 de mayo, 2024', by: 'Autor 2' },
  // Añadir más mazos si es necesario
]);

// Función para añadir una nueva tarjeta
const addDeck = () => {
  const newId = decks.value.length + 1;
  decks.value.push({ id: newId, title: `Mazo ${newId}`, date: 'Fecha', by: 'Autor' });
};

// Estado reactivo para el span activo
const activeFilter = ref('Recientes');

// Función para actualizar el filtro activo
const setActiveFilter = (filter) => {
  activeFilter.value = filter;
};

</script>

<template>
    <div class="decks-container">
        <HeaderMaster/>
        <div class="a ml-72 mt-24 pr-6">
            <h1 class=" font-bold md:text-32px sm:text-24px pt-2 ">Mis Mazos</h1>
            <div class=" flex items-baseline justify-between">
                <div class="filter-container flex gap-6" >
                    <span
                        :class="{
                        'text-14px font-normal p-2': true,
                        'font-semibold border-b-4 border-b-btnBlue': activeFilter === 'Recientes'
                        }"
                        @click="setActiveFilter('Recientes')"
                    >
                        Recientes
                    </span>
                    <span
                        :class="{
                        'text-14px font-normal p-2': true,
                        'font-semibold border-b-4 border-b-btnBlue': activeFilter === 'Todos'
                        }"
                        @click="setActiveFilter('Todos')"
                    >
                        Todos
                    </span>                
                </div>
            
                <ProfileBtn class="flex" @click="addDeck" btnTitle=" + Crear Mazo"/>
            </div>
            <div class="d-container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-8 items-center">
                <DecksCard
                    v-for="(deck) in decks"
                    :key="deck.id"
                    :id="deck.id"
                    :title="deck.title"
                    :date="deck.date"
                    :by="deck.by"
                />
            </div>
            
        </div>
        <NavBar/>
    </div>
</template>
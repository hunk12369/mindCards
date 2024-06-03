<script setup>

import { defineProps } from 'vue';

// Definición de las props
const props = defineProps({
  id: Number,
  title: String,
  date: String,
  by: String
  /* title: {
    type: String,
    default: 'Título',
  },
  date: {
    type: String,
    default: '20 de mayo, 2024',
  },
  by: {
    type: String,
    default: 'none',
  }, */
});

</script>

<template>
    <router-link :to="{name:'DeckDetailsView', params: { id: props.id }}" class="deck-container w-full relative ">
      <img src="../assets/images/img.png" alt="card" class="w-full object-cover rounded-lg">
        <div class="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex flex-col justify-end p-4 hover:bg-opacity-10 hover:bg-white">
            <h1 class="text-white text-2xl font-semibold" >{{ title }}</h1>
            <span  class="text-white">{{ date }}</span>
            <div class="owner-container rounded-lg bg-opacity-20 bg-white p-2 w-1/3 flex items-center justify-center">
                <span class="text-white" >By {{ by }}</span>
            </div>
        </div>
    </router-link>
</template>
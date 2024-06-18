<script setup>
import { ref } from "vue";
import HeaderMaster from "@/components/HeaderMaster.vue";
import NavBar from "@/components/NavBar.vue";
import DecksCard from "@/components/DecksCard.vue";
import ProfileBtn from "@/components/ProfileBtn.vue";
import PopUp from "@/components/PopUp.vue";
//import { Icon } from '@iconify/vue';


const decks = ref([
  { id: 1, title: "Mazo 1", date: "20 de mayo, 2024", by: "Autor 1" },
  { id: 2, title: "Mazo 2", date: "21 de mayo, 2024", by: "Autor 2" },
]);

const addDeck = (title) => {
  const newId = decks.value.length + 1;
  decks.value.push({
    id: newId,
    title: title,
    date: new Date().toLocaleDateString(),
    by: "Autor",
  });
  closePopUp();
};

const activeFilter = ref("Recientes");

const setActiveFilter = (filter) => {
  activeFilter.value = filter;
};

const isPopUpVisible = ref(false);

const openPopUp = () => {
  isPopUpVisible.value = true;
};

const closePopUp = () => {
  isPopUpVisible.value = false;
};

</script>

<template>
  <div class="decks-container">
    <HeaderMaster />
    <NavBar />

    <div class="a ml-72 mt-24 pr-6">
      <h1 class="font-bold md:text-32px sm:text-24px pt-2">Mis Mazos</h1>
      <div class="flex items-baseline justify-between">
        <div class="filter-container flex gap-6">
          <span
            :class="{
              'text-14px font-normal p-2': true,
              'font-semibold border-b-4 border-b-btnBlue':
                activeFilter === 'Recientes',
            }"
            @click="setActiveFilter('Recientes')"
          >
            Recientes
          </span>
          <span
            :class="{
              'text-14px font-normal p-2': true,
              'font-semibold border-b-4 border-b-btnBlue':
                activeFilter === 'Todos',
            }"
            @click="setActiveFilter('Todos')"
          >
            Todos
          </span>
        </div>
        <!-- <ProfileBtn class="flex" @click="addDeck" btnTitle=" + Crear Mazo" /> -->
        <ProfileBtn class="flex" @click="openPopUp" btnTitle=" + Crear Mazo" />
      </div>
      <div
        class="d-container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-8 items-center"
      >
        <DecksCard
          v-for="deck in decks"
          :key="deck.id"
          :id="deck.id"
          :title="deck.title"
          :date="deck.date"
          :by="deck.by"
        />
      </div>
      <div v-if="isPopUpVisible" class=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 ">
        <PopUp @add-deck="addDeck" @close="closePopUp" />
      </div>
      
    </div>
  </div>
</template>

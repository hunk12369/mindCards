<script setup>

import ProfileBtn from "@/components/ProfileBtn.vue";
import { defineEmits } from "vue";
import { ref } from "vue";

const deckName = ref('');

const emit = defineEmits(['add-deck', 'close']);

const submitForm = () => {
  if (deckName.value.trim()) {
    emit('add-deck', deckName.value.trim());
    deckName.value = '';
  }
};

const cancelForm = () => {
  deckName.value = '';
  emit('close');
};

</script>

<template>
    <div class="pop-up bg-white border border-btnBlue rounded-md p-7 gap-4 flex flex-col">
        <span class=" font-extrabold text-20px text-btnBlue">Nuevo Mazo</span>
        <div class="profile-data flex flex-col gap-2">
          <h3 class="font-medium text-14px text-darkBlue">Nombre del Mazo</h3>
          <input
            v-model="deckName"
            type="text"
            placeholder="Nombre de mi nuevo mazo"
            class="outline-none block w-full border py-2 px-7 rounded-md text-14px placeholder:text-gray-500 focus:ring-1 focus:ring-btnBlue"
          />
        </div>
        <div class="btn flex gap-4 items-center justify-end">
          <ProfileBtn @click="submitForm" btnTitle="Aceptar"/>
          <ProfileBtn @click="cancelForm" btnTitle="Cancelar"/>
        </div>
      </div>
</template>
<script setup>
import { ref, defineEmits } from 'vue';
import { Icon } from '@iconify/vue';

const isOpen = ref(false);
const selectedType = ref('Básica');
const types = [
    'Básica', 'Imagen', 'Audio', 'Relleno'
];

const emit = defineEmits(['selectType']);

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const selectType = (type) => {
    selectedType.value = type;
    isOpen.value = false;
    emit('selectType', type); 
};
</script>

<template>
  <div class="inline-block">
    <button @click="toggleDropdown" class="bg-white border border-purpleP rounded-lg text-purpleP font-medium p-2 flex items-center hover:bg-purpleP hover:text-white">
      {{ selectedType }}
      <span class="float-right">
        <Icon icon="iconamoon:arrow-down-2-light" width="26" height="26"/>
      </span>
    </button>
    <div v-if="isOpen" class="absolute bg-white border border-purpleP rounded-lg text-purpleP font-medium p-2 mt-1 inline-block shadow-lg z-10">
      <ul class="list-none p-0 m-0">
        <li
          v-for="(type, index) in types"
          :key="index"
          @click="selectType(type)"
          class="bg-white rounded-lg text-purpleP font-medium p-2 hover:bg-purpleP hover:text-white cursor-pointer"
        >
          {{ type }}
        </li>
      </ul>
    </div>
  </div>
</template>

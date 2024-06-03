<script setup>

import { defineProps } from 'vue';

const props = defineProps ({
    title: {
        type: String,
        default: 'Nombre del Usuario'
    },
    inputTitle: {
        type: String,
        default: 'Maria'
    },
    typeTitle: {
        type: String,
        default: 'text'
    }
})

</script>

<template>
    <div class="profile-data flex flex-col gap-2 ">
        <h3 class=" font-medium text-14px text-darkBlue">{{ props.title }}</h3>
        <input :type="props.typeTitle" :placeholder="props.inputTitle" class="outline-none block w-full border py-2 px-7 rounded-md text-14px placeholder:text-gray-500 focus:ring-1 focus:ring-btnBlue">
    </div>
</template>
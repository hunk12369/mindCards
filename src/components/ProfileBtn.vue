<script setup>


import { defineProps } from 'vue';

const props = defineProps ({
    btnTitle: {
        type: String,
        default: 'Cambiar Foto'
    }
})

</script>

<template>
    <button class=" border hover:bg-white hover:border-btnBlue rounded-md hover:text-btnBlue py-1 px-3 bg-btnBlue text-white font-medium active:border-lightGrey active:text-lightGrey">
        {{ props.btnTitle }}
    </button>
</template>
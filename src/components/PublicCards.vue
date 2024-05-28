<script setup>
    import { Icon } from '@iconify/vue';
    import { defineProps } from 'vue';
    const props = defineProps ({
        person: {
            type: String,
            default: 'Pedro Perez'
        },
        
    })
</script>

<template>
    <div class="public-cards-container space-y-4 rounded-xl relative w-96 bg-lightBlue-20">
        <div class="img-container">
            <img src="../assets/images/emi.png" alt="mazo" class="w-full h-full object-cover rounded-lg">
        </div>
        <div class="data-decks absolute bottom-0 w-full bg-white bg-opacity-75 py-4 flex flex-col items-center justify-center space-y-2 rounded-lg">
            <span class="text-lightGrey">By: {{props.person}}</span>
            <button class="text-white font-semibold bg-blue-700 py-1 px-7 flex items-center rounded-md hover:text-blue-700 hover:bg-white">
                Ver más
                <Icon icon="mingcute:arrow-right-fill" width="24" height="24" class="ml-2" style="color: #fff" />
            </button>
        </div>
    </div>
</template>
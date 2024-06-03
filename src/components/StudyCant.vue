<script setup>

import { defineProps } from 'vue';

const props = defineProps({
    titleStudy: {
        type: String,
        default: 'Nuevas'
    },
    cant: {
        type: Number,
        default: 15
    }

});
</script>

<template>
    
    <div class="study text-purpleP flex flex-col items-center bg-opacity-30 bg-purpleP py-3 px-8 rounded-xl">
        <span class="font-medium text-12px">{{ props.titleStudy }}</span>
        <span class="font-black text-30px">{{ props.cant }}</span>
    </div>
    
    

</template>

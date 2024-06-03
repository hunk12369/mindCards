<script setup>


import { Icon } from '@iconify/vue';
import { defineProps } from 'vue';

const props = defineProps({
    changeIcon: {
        type: String,
        default: 'ion:create'
    },
    titlebtn: {
        type: String,
        default: 'Crear Flash Cards'
    }
});

</script>


<template>
    <div class="a bg-purpleP rounded-lg flex flex-col items-center gap-3 p-5 w-full hover:bg-opacity-70">
        <Icon :icon="props.changeIcon" width="30" height="30"  style="color: #fff" />
        <span class="text-white font-semibold text-14px text-center">{{ props.titlebtn }}</span>
    </div>
</template>
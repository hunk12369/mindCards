<script setup>
import { Icon } from '@iconify/vue'
import { defineProps } from 'vue'

const props = defineProps({
    changeIcon: {
        type: String,
        default: 'lets-icons:message' 
    },
    titlePlan: {
        type: String,
        default: 'Mind Cards Free'
    },
    pPlan: {
        type: String,
        default: 'Cualquier persona puede utilizar y ser libre de expresar su creativiada para aprender'
    }
})
</script>

<template>
    <div class="plans-container bg-plansblue flex flex-col items-center justify-center text-white p-6 space-y-4 rounded-xl w-96 hover:bg-lightBlue-default">
        <Icon :icon = "props.changeIcon" width="60" height="60" />
        <h3 class=" text-4xl font-extrabold text-center">{{props.titlePlan}}</h3>
        <p class="text-sm font-bold text-center ">{{props.pPlan}}</p>
        <slot></slot>
    </div>

</template>
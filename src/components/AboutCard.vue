<script setup>

import { Icon } from '@iconify/vue'
import { defineProps } from 'vue'


const props = defineProps({
    titleAbout: {
        type: String,
        default: 'Historia'
    },
    pText: {
        type: String,
        default: 'En Mind Cards, nuestra historia comenzó sin tener idea de que estabamos haciendo y un día de mucho estudiar la idea iluminó nuestras cabezas con la presión que estabamos sintiendo, entonces vino lo evidente que como estudiantes es muy necesario y en especial debe ser efectiva y Mind Card fue la solución.'
    },
    iconChange: {
        type: String,
        default: 'ic:outline-history'
    }

})

</script>

<template>
    <div class="about-container flex items-center justify-evenly font-sans">
        <Icon :icon = "props.iconChange" width="300" height="300" style="color: #699BF7"/>
        <div class="text-about-container flex flex-col w-96 gap-2 text-lightGrey">
            <h1 class=" text-darkBlue font-semibold text-4xl text-end" >{{ props.titleAbout }}</h1>
            <p class=" text-lightGrey font-normal text-end" >{{ props.pText }}</p>  
        </div>
    </div>
</template>
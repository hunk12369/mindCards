<script setup>
import { defineProps } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
    buttonText: {
        type: String,
        default: 'Login'
    },
    googleIcon: {
        type: String,
        default: 'mdi:account-circle'
    }
    
})
</script>

<template>
    <button class="btn-session-container flex font-sans font-semibold w-96">
        <Icon :icon = "googleIcon" width="20" height="20" />
        {{ props.buttonText }}
    </button>
</template>

<style scoped>
.btn-session-container{
    
    justify-content: center;
    align-items: center;
    height: 5vh;
    border-radius: 10px;
    border: none;
    background-color: #053AF8;
    color: #ffffff;
    font-size: 20px;
    font-weight: 100;
}
.btn-session-container:hover {
  background-color: #053af88b;
}
.btn-session-container:active {
  background-color: #022295; 
}
</style>
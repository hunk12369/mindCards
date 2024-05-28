<script setup>
import { defineProps } from 'vue'
import { Icon } from '@iconify/vue';

const props = defineProps({
  IconChange: {
    type: String,
    default: 'iconamoon:home-fill'
  },
  spanText: {
    type: String,
    default: 'Inicio'
  }
})
</script>

<template>
  <div class="nav-cards-container flex space-x-2 items-center h-auto w-full hover:bg-lightBlue-50 hover:rounded-md px-3 py-1 hover:text-bluetwo" >
    <Icon :icon="IconChange" width="24" height="24" class="icon text-greyNew transition-colors duration-200"/>
    <span class="span font-normal text-14px text-greyNew transition-colors duration-200">{{ props.spanText }}</span>
  </div>
</template>

<style scoped>
.nav-cards-container:hover .icon,
.nav-cards-container:active .icon
{
  color: var(--bluetwo);
}
.nav-cards-container:hover .span,
.nav-cards-container:active .icon
{
  color: var(--bluetwo);
  font-weight: 600;
}
</style>
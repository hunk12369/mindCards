<script setup>
import { defineProps } from "vue";
import { defineEmits } from "vue";

const props = defineProps({
  option: String,
});

const emits = defineEmits(["score"]);

const scores = {
  'Muy Fácil': 5,
  'Fácil': 4,
  'Medio': 3,
  'Difícil': 1,
  'Muy Difícil': 0,
};

const handleClick = () => {
  emits("score", scores[props.option]);
};
</script>

<template>
  <button
    @click="handleClick"
    class="border bg-purpleP rounded-xl text-white font-medium py-2 px-5 hover:text-purpleP hover:bg-white hover:border-purpleP"
  >
    {{ option }}
  </button>
</template>

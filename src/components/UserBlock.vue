<script setup>
import { Icon } from '@iconify/vue'
import { defineProps } from 'vue'

const props = defineProps({
    changeIcon: {
        type: String,
        default: 'lets-icons:message' 
    },
    titleBlock: {
        type: String,
        default: 'Usuario o Email'
    },
    typeInput: {
        type: String,
        default: 'Text'
    }
})

const inputType = props.typeInput?.toLowerCase() || 'text';
const inputId = `${inputType}-input`;
const inputName = `${inputType}-name`;
let inputPlaceholder = '';

switch (inputType) {
  case 'email':
    inputPlaceholder = 'juanperez@gmail.com';
    break;
  case 'password':
    inputPlaceholder = 'Ingrese su contraseña';
    break;
  case 'text':
    inputPlaceholder = 'juan perez';
    break;
  default:
    inputPlaceholder = 'ninguno we';
    break;
}

</script>


<template>
    <div class = "block-container flex flex-col gap-1 text-white">
        <span class = "title-user-container font-sans font-semibold text-2xl">{{ props.titleBlock }}</span>
        <div class="fill-container flex items-center gap-3">
            <Icon :icon= "props.changeIcon" width="26" height="26" style="color: #ffffff" />
            <input :type="typeInput" :id= "inputId" :name = "inputName" :placeholder="inputPlaceholder" class = "input-style">
        </div>

    </div>
</template>

<style scoped>

.input-style{
    background-color: transparent;
    margin: 0;
    padding: 15px;
    border: transparent;
    color: #ffffff;
    font-size: 20px;
    width: 40vh;
    outline: none;
}

.input-style::placeholder {
    color: #ffffff;
    opacity: 0.5;

}
.input-style:focus {
  border-bottom: 2px solid #053AF8;
}
</style>
<script setup>
    import { Icon } from '@iconify/vue';
</script>

<template>
      <header class=" bg-lightBlue-30 px-8 py-5">
    <div class="header-container flex items-center justify-between">
      <div class="logo-title flex items-center gap-4">
        <img src="/Vector.png" alt="Logo" class="logo">
        <h1 class="title font-sans font-extrabold text-2xl text-darkBlue">Mind Cards</h1>
      </div>
      <div class="header-links grid grid-flow-col gap-10  items-center justify-between font-semibold">
        <!-- Aquí puedes agregar elementos de navegación comunes, como links a otras páginas -->
        <router-link to="/" class=" text-darkBlue hover:text-blue-600 ">Inicio</router-link>
        <router-link to="/about" class=" text-darkBlue hover:text-blue-600">Acerca de</router-link>
        <router-link to="/howworks" class=" text-darkBlue hover:text-blue-600">¿Cómo funciona?</router-link>
        <router-link to="/plans" class=" text-darkBlue hover:text-blue-600">Planes</router-link>
        <router-link to="/public" class=" text-darkBlue hover:text-blue-600">Flash Card Públicas</router-link>
      </div>
      <div class="buttons flex gap-3.5 font-medium">
        <router-link to="/login"> 
          <button class="btn-login bg-lightBlue-default hover:bg-lightBlue-30 text-white hover:text-blue-500 active:bg-white px-4 py-2 rounded-md">Login</button>
        </router-link>
        <router-link to="/signup ">
          <button class="btn-signup bg-lightBlue-default hover:bg-lightBlue-30 text-white hover:text-blue-500 active:bg-white px-4 py-2 rounded-md">Sign Up</button>
        </router-link>
      </div>
    </div>
  </header>
  <div class="flex flex-col items-center justify-center space-y-10 p-20">
    <h1 class=" font-black text-5xl text-center p-6 rounded-xl text-lightLila items-center justify-center">Existen 4 típos de Flash Cards que pueden ser Personalizadas</h1>
    <ul class=" list-decimal space-y-10 font-black text-lightGrey ">
      <li class=" font-medium text-2xl space-y-8">
        <h1 class=" font-extrabold text-3xl ">Flash Card Básica</h1>
        <ul >
          <li>
            Es exclusivamente texto, donde tanto como adelante y atrás podrás poner el texto que quieras dependiendo tus necesidades.
          </li>
        </ul>
      </li>
      <li class=" font-medium text-2xl space-y-8">
        <h1 class=" font-extrabold text-3xl ">Flash Card Imagen</h1>
        <ul >
          <li>
            Esta Opción te brinda la opción de poder poner imagenes en las Flash Cards, donde podras rellenar a tu gusto como quieres poner las imagenes y que partes quieres identificar.
          </li>
        </ul>
      </li>
      <li class=" font-medium text-2xl space-y-8">
        <h1 class=" font-extrabold text-3xl ">Flash Card Audio</h1>
        <ul>
          <li>
            Podrás grabar audio donde podrás usarlo al igual que una basíca.
          </li>
        </ul>
      </li>
      <li class=" font-medium text-2xl space-y-8">
        <h1 class=" font-extrabold text-3xl ">Flash Card Relleno</h1>
        <ul>
          <li>
            Podrás rellenar campos vacios de un texto con el fin de memorizar definciones necesarias.
          </li>
        </ul>
      </li>
    </ul>

  </div>
  <footer class=" bg-lightBlue-default p-20">
    <div class="social-container flex items-center justify-around">
      <div class="title-container flex items-center gap-5">
        <Icon icon="ph:cards-three-fill" width="50" height="50"  style="color: #ffffff" />
        <h1 class="title font-sans font-extrabold text-2xl text-darkBlue">Mind Cards</h1>
      </div>
      <div class="p-container text-center text-white font-semibold">
        <p>Copyright © 2024 Mind Cards.</p>
        <p>All rights reserved</p>
        <p>by jlee</p>
      </div>
      <div class="icons-social-container flex gap-8">
        <Icon icon="ic:baseline-facebook" width="36" height="36"  style="color: #ffffff" />
        <Icon icon="ri:instagram-fill" width="36" height="36"  style="color: #ffffff" />
        <Icon icon="prime:twitter" width="36" height="36"  style="color: #ffffff" />
        <Icon icon="mdi:youtube" width="36" height="36"  style="color: #ffffff" />
      </div>
    </div>
    
  </footer>
</template>
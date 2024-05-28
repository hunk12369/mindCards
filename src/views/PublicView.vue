<script setup>
    import { Icon } from '@iconify/vue';
    import PublicCards from '@/components/PublicCards.vue'
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
  <div class="title p-10 space-y-4">
    <h1 class="font-extrabold text-4xl text-lightGrey">Flash Cards Publicas</h1>
    <p class=" font-normal text-1xl text-lightGrey">Te presentamos todas las opciones de nuestros usuarios que hicieron públicas sus creaciones</p>
  </div>
  <div class=" p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
    <PublicCards/>
    <PublicCards person="Jose"/>
    <PublicCards person="Jose"/>
    <PublicCards person="Jose"/>
    <PublicCards person="Jose"/>
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
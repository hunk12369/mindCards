<script setup>
    import PlansCard from '@/components/PlansCard.vue';
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
  
  <div class="plans-container flex py-20 justify-around">
    <PlansCard changeIcon="ph:cards-fill">
      <ul class=" text-14px font-medium px-10 space-y-10 bg-lightBlue-30 rounded-md py-5">
        
        <li class="flex gap-4">
          <Icon icon="lets-icons:check-fill" width="23" height="22"  style="color: #0fa958" />
          Uso de la tarjeta Básica (Texto)
        </li>
        <li class="flex gap-4">
          <Icon icon="lets-icons:check-fill" width="25" height="25"  style="color: #0fa958" />
          Uso de la tarjeta Imagen (Imagenes)
        </li>
        <li class="flex gap-4">
          <Icon icon="carbon:close-filled" width="20" height="20"  style="color: #FF0000"/>
          Uso de la tarjeta Audio (Audios)
        </li>
        <li class="flex gap-4">
          <Icon icon="carbon:close-filled" width="33" height="33"  style="color: #FF0000" />
          Uso de la tarjeta Relleno (Rellenos de campos de texto)
        </li>
      </ul>
    </PlansCard>
    <PlansCard changeIcon="fluent:premium-28-regular" titlePlan="Mind Cards Premium" pPlan="Las personas con este plan serán capaces de acceder a contenido como insertar imagenes">
      <ul class=" text-14px font-medium px-10 space-y-10 bg-lightBlue-30 rounded-md py-5">
        
        <li class="flex gap-4">
          <Icon icon="lets-icons:check-fill" width="23" height="22"  style="color: #0fa958" />
          Uso de la tarjeta Básica (Texto)
        </li>
        <li class="flex gap-4">
          <Icon icon="lets-icons:check-fill" width="25" height="25"  style="color: #0fa958" />
          Uso de la tarjeta Imagen (Imagenes)
        </li>
        <li class="flex gap-4">
          <Icon icon="carbon:close-filled" width="20" height="20"  style="color: #FF0000"/>
          Uso de la tarjeta Audio (Audios)
        </li>
        <li class="flex gap-4">
          <Icon icon="lets-icons:check-fill" width="37" height="37"  style="color: #0fa958" />
          Uso de la tarjeta Relleno (Rellenos de campos de texto)
        </li>
      </ul>
    </PlansCard>
    <PlansCard changeIcon="material-symbols:school-outline" titlePlan="Mind Cards School" pPlan="Estudiantes con este plan podrán tener beneficios de contenido de insertar imagenes y rellenar espacios">
      <ul class=" text-14px font-medium px-10 space-y-10 bg-lightBlue-30 rounded-md py-5">
        <li class="flex gap-4 items-center">
          <Icon icon="lets-icons:check-fill" width="23" height="22"  style="color: #0fa958" />
          Uso de la tarjeta Básica (Texto)
        </li>
        <li class="flex gap-4 items-center">
          <Icon icon="lets-icons:check-fill" width="25" height="25"  style="color: #0fa958" />
          Uso de la tarjeta Imagen (Imagenes)
        </li>
        <li class="flex gap-4 items-center">
          <Icon icon="lets-icons:check-fill" width="22" height="22"  style="color: #0fa958" />
          Uso de la tarjeta Audio (Audios)
        </li>
        <li class="flex gap-4 items-center">
          <Icon icon="lets-icons:check-fill" width="37" height="37"  style="color: #0fa958" />
          Uso de la tarjeta Relleno (Rellenos de campos de texto)
        </li>
      </ul>
    </PlansCard>
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
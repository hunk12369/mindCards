<script setup>
//import unisData from '@/assets/us/Unis.json';
// import ButtonSession from '@/components/ButtonSession.vue';
import AboutCard from '@/components/AboutCard.vue';
import PlansCard from '@/components/PlansCard.vue';
import PublicCards from '@/components/PublicCards.vue';
import { Icon } from '@iconify/vue';
import { RouterLink } from 'vue-router';

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
        <router-link to="/signup">
          <button class="btn-signup bg-lightBlue-default hover:bg-lightBlue-30 text-white hover:text-blue-500 active:bg-white px-4 py-2 rounded-md">Sign Up</button>
        </router-link>
      </div>
    </div>
  </header>
  <div class="card-container flex items-center justify-around py-8">
    <div class="card-text text-lightGrey flex flex-col gap-5">
      <h3 class=" font-semibold text-5xl">Flashcards hechas a tu medida: <p class="text-lightLila">Crea y aprende de manera eficaz</p></h3>
      <p>Regístrate para empezar ahora mismo.</p>
      <router-link to="/signup">
        <button class="register-button bg-blueBlue text-white hover:text-white hover:bg-lightBlue-default active:text-blueBlue active:font-extrabold active:bg-white px-4 py-2 rounded-xl text-sm font-medium w-fit">Regístrate</button>
      </router-link>
    </div>
    <img src="/monochrome_plastic_cards.png" alt="Tarjeta" class="card-image h-auto max-w-screen-sm max-h-screen-sm">
  </div>
  <div class="clientes-container font-sans text-lightGrey flex flex-col items-center justify-center ">
    <h3 class=" font-semibold text-3xl ">Nuestros Clientes</h3>
    <span>Estudiantes de distintos Colegios, Universidades e Instituciones</span>
    <div class="img-u-container flex items-center gap-20 ">
      <!-- <div v-for="universidad in unisData" :key="universidad.id">
        <img :src="universidad.imgsrc" :alt="universidad.name">
      </div> --> 
      <img src="../assets/images/emi.png" alt="emi">
      <img src="../assets/images/cato.png" alt="emi">
      <img src="../assets/images/univalle.png" alt="emi">
      <img src="../assets/images/unifranz.png" alt="emi">
      <img src="../assets/images/chupea.png" alt="emi">
    </div>
  </div>
  <div class="plans-container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 justify-items-center gap-10">

    <router-link to="/plans">
      <PlansCard changeIcon="ph:cards-fill"/>
    </router-link>
    <router-link to="/plans">
      <PlansCard changeIcon="fluent:premium-28-regular" titlePlan="Mind Cards Premium" pPlan="Las personas con este plan serán capaces de acceder a contenido como insertar imagenes" />
    </router-link>
    <router-link to="/plans">
      <PlansCard changeIcon="material-symbols:school-outline" titlePlan="Mind Cards School" pPlan="Estudiantes con este plan podrán tener beneficios de contenido de insertar imagenes y rellenar espacios"/>
    </router-link>
    
  </div>

  

  <div class="info-extra-one">
    <AboutCard iconChange = "game-icons:three-friends"  titleAbout = "Comparte con tu Compañeros" pText = "Compartir con los compañeros es una función esencial en muchas aplicaciones modernas, diseñada para facilitar la colaboración y la comunicación dentro de un grupo, ya sea en un entorno académico, profesional o social. Esta función permite a los usuarios enviar y recibir información, documentos, enlaces y otros recursos de manera eficiente y organizada."  />
  </div>

  <div class="title p-10 space-y-4 text-center">
    <h1 class="font-extrabold text-4xl text-lightGrey">Flash Cards Publicas</h1>
    <p class=" font-normal text-1xl text-lightGrey">Personaliza tus Flash Cards y diseñalas a tu gusto para una mayor libertad</p>
  </div>

  <div class=" p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
    <PublicCards/>
    <PublicCards person="Jose"/>
    <PublicCards person="Jose"/>
    
  </div>

  <div class="invitation flex flex-col items-center justify-center gap-10 p-10">
    <h1 class=" font-extrabold text-center text-6xl text-lightGrey">¿Qué estas esperando? <br> Se parte de Mind Cards</h1>
    <router-link to="/signup">
      <button class="register-button bg-blueBlue text-white hover:text-white hover:bg-lightBlue-default active:text-blueBlue active:font-extrabold active:bg-white px-4 py-2 rounded-xl text-sm font-medium w-fit">
        Prueba con Confianza!!! ->
      </button>
    </router-link>
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





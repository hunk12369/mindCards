<script setup>
import { Icon } from "@iconify/vue";
import NavCards from "@/components/NavCards.vue";
</script>

<template>
  <div
    class="navbar-container items-start p-8 space-y-6 border-r fixed top-medida bottom-0 mt-0 bg-white"
  >
    <div class="title-container flex items-center">
      <Icon
        icon="mdi:human-welcome"
        width="45"
        height="45"
        style="color: #e4c647;"
      />
      <h1 class="text-yellowa font-extrabold text-24px">Bienvenido!!!</h1>
    </div>
    <div class="nav-view flex flex-col space-y-4 items-start">
      <!-- <router-link
        to="/login/home"
        class="w-full"
        exactActiveClass="bg-otrogrey-30 rounded-md"
      >
        <NavCards />
      </router-link> -->
      <router-link
        to="/login/decks"
        class="w-full"
        exactActiveClass="bg-otrogrey-30 rounded-md"
      >
        <NavCards spanText="Mis Mazos" IconChange="mdi:cards" />
      </router-link>
      <router-link
        to="/login/stadistics"
        class="w-full"
        exactActiveClass="bg-otrogrey-30 rounded-md"
      >
        <NavCards
          spanText="Estadísticas"
          IconChange="fluent:data-area-20-filled"
        />
      </router-link>
      <router-link
        to="/login/help"
        class="w-full"
        exactActiveClass="bg-otrogrey-30 rounded-md"
      >
        <NavCards spanText="Ayuda" IconChange="material-symbols:help" />
      </router-link>
      <!-- <router-link
        to="/login/settings"
        class="w-full"
        exactActiveClass="bg-otrogrey-30 rounded-md"
      >
        <NavCards spanText="Configuración" IconChange="ic:round-settings" />
      </router-link> -->
      <router-link to="/" class="w-full">
        <NavCards spanText="Cerrar Sesion" IconChange="clarity:logout-solid" />
      </router-link>
    </div>
  </div>
</template>

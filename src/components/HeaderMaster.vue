<script setup>

import { Icon } from '@iconify/vue';

</script>

<template>
    <header class="header-container flex p-5 border-b space-x-28 justify-between fixed top-0 left-0 right-0 bg-white items-center">
        <div class="title-container flex space-x-4 items-center">
            <Icon icon="ep:menu" width="24" height="24"  style="color: #8A8F9D" />
            <div class="app-name flex space-x-1 items-center justify-center">
                <Icon icon="ph:cards-three-fill" width="30" height="30"  style="color: #699bf7" />
                <h1 class=" font-extrabold text-14px">MindCards</h1>
            </div>
        </div>
        <div class="search-bar-container flex-grow flex space-x-2 items-center ">
            <Icon icon="tabler:search" width="24" height="24"  style="color: #9AA6AC" />
            <input type="text" name="search" id="search" class=" outline-none block w-full border p-1 rounded-md focus:ring-1 focus:ring-lightBlue  " placeholder="Buscar">
        </div>
        
        <router-link to="/login/profile">
        <div class="profile-img bg-white rounded-full ">
            <img src="../assets/images/Avatarphoto2.png" alt="person" class=" w-8 h-8 rounded-full object-cover ">
        </div>            
        </router-link>
    </header>
    
</template>
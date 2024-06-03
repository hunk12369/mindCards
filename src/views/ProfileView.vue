<script setup>

import NavBar from '@/components/NavBar.vue';
import HeaderMaster from '@/components/HeaderMaster.vue';
import ProfileBtn from '@/components/ProfileBtn.vue'
import ProfileBox from '@/components/ProfileBox.vue'

</script>


<template>
    <div class="profile-container">
        <HeaderMaster/>
        <div class="a ml-72 mt-24 pr-6">
            <h1 class=" font-bold md:text-32px sm:text-24px ">Mi Perfíl</h1>
            <div class="profile-data-container flex flex-col items-center justify-center gap-5 bg-greyl rounded-md border p-10 ">
                <h1 class=" font-semibold text-20px">Foto de Perfíl</h1>
                <img src="../assets/images/Avatarphoto2.png" alt="profile-photo" class=" w-52 h-52 rounded-full object-cover ">
                <div class="btn-img w-1/2 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
                    <ProfileBtn/>
                    <ProfileBtn btnTitle="Borrar Foto"/>
                </div>
                <div class="profile-box w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
                    <ProfileBox/>
                    <ProfileBox title="Correo Electronico" inputTitle="maria@gmail.com" typeTitle="email" />
                    <ProfileBox title="Edad" inputTitle="25" typeTitle="number"/>
                    <ProfileBox title="Universidad" inputTitle="Escuela Militar de Ingeniería"/>
                </div>
                <ProfileBtn btnTitle="Guardar Cambios"/>
            </div>
            
        </div>
        <NavBar/>
    </div>
</template>
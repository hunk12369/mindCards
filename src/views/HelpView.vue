<script setup>

import HeaderMaster from '@/components/HeaderMaster.vue'
import NavBar from '@/components/NavBar.vue'

</script>

<template>
    <div class="home-container">
        <HeaderMaster/>
        <div class="a ml-72 mt-24 right-80">
            <h1 class=" font-bold md:text-32px sm:text-24px pt-2 ">Ayuda</h1>
            <div class="flex flex-col items-center justify-center space-y-10 py-5 px-10">
                <h1 class=" font-black text-30px text-center p-2 rounded-xl text-lightLila items-center justify-center">Existen 4 típos de Flash Cards que pueden ser Personalizadas</h1>
                <ul class=" list-decimal space-y-10 font-black text-lightGrey  ">
                    <li class=" font-medium text-2xl space-y-8">
                        <h1 class=" font-extrabold text-3xl ">Flash Card Básica</h1>
                        <ul>
                            <li class=" text-justify">
                                Es exclusivamente texto, donde tanto como adelante y atrás podrás poner el texto que quieras dependiendo tus necesidades.
                            </li>
                        </ul>
                    </li>
                    <li class=" font-medium text-2xl space-y-8">
                        <h1 class=" font-extrabold text-3xl ">Flash Card Imagen</h1>
                        <ul>
                            <li class=" text-justify">
                                Esta Opción te brinda la opción de poder poner imagenes en las Flash Cards, donde podras rellenar a tu gusto como quieres poner las imagenes y que partes quieres identificar.
                            </li>
                        </ul>
                    </li>   
                    <li class=" font-medium text-2xl space-y-8">
                        <h1 class=" font-extrabold text-3xl ">Flash Card Audio</h1>
                        <ul>
                            <li class=" text-justify">
                                Podrás grabar audio donde podrás usarlo al igual que una basíca.
                            </li>
                        </ul>
                    </li>
                    <li class=" font-medium text-2xl space-y-8">
                        <h1 class=" font-extrabold text-3xl ">Flash Card Relleno</h1>
                        <ul>
                            <li class=" text-justify">
                                Podrás rellenar campos vacios de un texto con el fin de memorizar definciones necesarias.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <NavBar/>
    </div>
</template>
<script setup>
import UserBlock from '@/components/UserBlock.vue'
import ButtonSession from '@/components/ButtonSession.vue'
</script>

<template>
    <div class="login-container bg-blue-500 flex justify-evenly items-center h-screen font-sans">
        <div class="text-login-container gap-10 items-center flex flex-col">
            <h1 class= "title-welcome font-sans text-white text-7xl font-extrabold ">Bienvenido!!</h1>
            <div class="remember-and-pass flex gap-2.5 text-white text-xs items-start flex-col">
                <UserBlock changeIcon = "lets-icons:message" titleBlock = "Usuario o Email" typeInput = "email"/>
                <UserBlock changeIcon = "ic:outline-lock" titleBlock = "Contraseña" typeInput = "password"/>
                <div class="question-password-container flex justify-between w-96" >
                    <label for="remember" class="remember-box gap-2.5 items-center flex text-sm justify-evenly">
                        <input  class="remember-checkbox w-4 h-4 mr-2" type="checkbox" id="remember" name="remember">
                        Recuerdame
                    </label> 
                    <router-link to="/">
                        <a href="#forgot" class = "forgot-password ">¿Olvidaste la Contraseña?</a>
                    </router-link>
                    
                </div>
            </div>
            <div class="flex flex-col gap-5">            
                <ButtonSession buttonText = "Login" />
                <ButtonSession buttonText = "Log In with Google" googleIcon="flat-color-icons:google"/>
            </div>
            <div class="transition-sign-container">
                <span class = "span-question-account">¿No tiene una Cuenta?</span>
                <router-link to="/signup">
                    <a href="#signup" class = "forgot-password">Sign up</a>
                </router-link>
                
            </div>
        </div>
        <div class="image-one-container">
            <img src="../assets/images/image-one.png" alt="elwey">
        </div>
    </div>
    
    

</template>

<style scoped>

.forgot-password{
    color: #053AF8;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
}
.forgot-password:hover{
    text-decoration: underline;
}

.transition-sign-container{
    display: flex;
    align-items: center;
    gap: 5px;
}
.span-question-account{
    color: #ffffff;
    font-size: 15px;
}
</style>

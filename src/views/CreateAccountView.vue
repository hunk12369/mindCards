<script setup>
import ButtonSession from '@/components/ButtonSession.vue';
import UserBlock from '@/components/UserBlock.vue';



</script>

<template>
    <div class="create-container">
        <div class="text-create-container">
            <h1 class = "title-welcome">Crear Cuenta</h1>
            <div class="textbox-create-container">
                <UserBlock changeIcon = "lets-icons:message" titleBlock = "Usuario o Email" typeInput = "email"/>
                <UserBlock changeIcon = "tabler:user" titleBlock = "Nombre de Usuario" typeInput = "text"/>
                <UserBlock changeIcon = "ic:outline-lock" titleBlock = "Contraseña" typeInput = "password"/>
                <UserBlock changeIcon = "ic:outline-lock" titleBlock = "Confirmar Contraseña" typeInput = "password"/>
            </div>
            <div class="btn-create-container">
                <ButtonSession buttonText = "Create Account"/>
                <ButtonSession buttonText = "Log In with Google" googleIcon="flat-color-icons:google"/>
            </div>
            <div class="transition-sign-container">
                <span class = "span-question-account">¡Ya tienes una cuenta!</span>
                <a href="#login" class = "login-question">Login</a>
            </div>
        </div>
        <div class="image-one-container">
            <img src="../assets/images/image-two.png" alt="losweyes" class = "losweyes">
        </div>
    </div>
    

</template>

<style scoped>
.create-container{
    background: #699BF7;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    height: 100vh; 
}
.text-create-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}
.textbox-create-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}
.title-welcome{
    color: #ffffff;
    font-size: 50px;
    margin: 30px 0px 30px 0px;
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
.login-question{
    color: #053AF8;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
}
.login-question:hover{
    text-decoration: underline;
}
.btn-create-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

</style>
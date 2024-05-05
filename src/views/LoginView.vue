<script setup>
import UserBlock from '@/components/UserBlock.vue'
import ButtonSession from '@/components/ButtonSession.vue'
</script>

<template>
    <div class="login-container">
        <div class="text-login-container">
            <h1 class= "title-welcome">Bienvenido!!</h1>
            <UserBlock changeIcon = "lets-icons:message" titleBlock = "Usuario o Email" typeInput = "email"/>
            <div class="remember-and-pass">
                <UserBlock changeIcon = "ic:outline-lock" titleBlock = "Contraseña" typeInput = "password"/>
                <div class="question-password-container" >
                    <label for="remember" class="remember-box">
                        <input  class="remember-checkbox" type="checkbox" id="remember" name="remember">
                        Recuerdame
                    </label> 
                    <a href="#forgot" class = "forgot-password">¿Olvidaste la Contraseña?</a>
                </div>
            </div>
            <ButtonSession buttonText = "Login" />
            <ButtonSession buttonText = "Log In with Google" googleIcon="flat-color-icons:google"/>
            <div class="transition-sign-container">
                <span class = "span-question-account">¿No tiene una Cuenta?</span>
                <a href="#signup" class = "forgot-password">Sign up</a>
            </div>
        </div>
        <div class="image-one-container">
            <img src="../assets/images/image-one.png" alt="elwey">
        </div>
    </div>
    
    

</template>

<style scoped>

.login-container{
    background: #699BF7;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    height: 100vh;
}
.text-login-container{
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
.question-password-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 55vh;
}
.remember-box{
    display: flex;
    gap: 10px;
    align-items: center;
    color: #ffffff;
    font-size: 15px;
}
.remember-checkbox{
    width: 20px;
    height: 20px;
}

.forgot-password{
    color: #053AF8;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
}
.forgot-password:hover{
    text-decoration: underline;
}
.remember-and-pass{
    display: flex;
    flex-direction: column;
    gap: 7px;
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

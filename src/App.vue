<template>
<!--   <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <LoginView/> -->
  <CreateAccountView/>

</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import LoginView from './views/LoginView.vue'
import CreateAccountView from './views/CreateAccountView.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    //LoginView,
    CreateAccountView

  }
}
</script>

<style>
body {
  
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
</style>

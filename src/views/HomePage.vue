<template>
  <header>
    <div class="header-container">
      <div class="logo-title">
        <img src="/Vector.png" alt="Logo" class="logo">
        <h1 class="title">Mind Cards</h1>
      </div>
      <div class="header-links">
        <!-- Aquí puedes agregar elementos de navegación comunes, como links a otras páginas -->
        <router-link to="/" class="nav-link">Inicio</router-link>
        <router-link to="/about" class="nav-link">Acerca de</router-link>
        <router-link to="/contact" class="nav-link">¿Cómo funciona?</router-link>
        <router-link to="/contact" class="nav-link">Planes</router-link>
        <router-link to="/contact" class="nav-link">Flash Card Pulicas</router-link>
      </div>
      <div class="buttons">
        <button class="btn-login">Login</button>
        <button class="btn-signup">Sign Up</button>
      </div>
    </div>
  </header>
  <div class="card-container">
    <div class="card-text">
      <h2>Flashcards hechas a tu medida</h2>
      <p>Crea y aprende de manera eficaz</p>
      <p>Regístrate para empezar ahora mismo.</p>
      <button class="register-button">Regístrate</button>
    </div>
    <img src="/monochrome_plastic_cards.png" alt="Tarjeta" class="card-image">
  </div>
</template>
<style scoped>
header {
  background-color: rgba(105, 155, 247, 0.3);
  padding: 20px;
  text-align: center;
  color: #18191F;
  margin: 0px;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
}

.logo-title {
  display: flex;
  align-items: center;
}

.title {
  margin-left: 10px;
  font-size: 24;
  /* Tamaño de fuente */
  font-weight: 900;
  /* Medium */
}

.header-links {
  display: grid;
  grid-auto-flow: column;
  /* Colocar los elementos en una sola fila */
  gap: 20px;
  /* Espacio entre los elementos */
  justify-content: center;
  /* Centrar horizontalmente */
  font-size: 16px;
  /* Tamaño de fuente */
  font-weight: 500;
  /* Medium */
}

.nav-link {
  margin: 0 10px;
  /* Añadir margen horizontal entre los enlaces */
  text-decoration: none;
  color: #18191F;
  /* Color del texto */
}

router-link {
  text-decoration: none;
  color: inherit;
}

.buttons {
  display: flex;
  margin-right: 40px;
}

.btn-login,
.btn-signup {
  margin-left: 10px;
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  background-color: #699BF7;
  color: #FFFFFF;
  cursor: pointer;
}

.btn-login:hover,
.btn-signup:hover {
  background-color: #cccccc;
}

.card-container {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.card-image {
  width: auto;
  /* Ajusta el tamaño de la imagen según sea necesario */
  height: 359px;
}

.card-text {
  margin-left: 20px;
  font-family: 'Inter', sans-serif;
  /* Fuente */
  font-size: 40px;
  /* Tamaño de fuente */
  font-weight: 600;
}

.register-button {
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background-color: #699BF7;
  color: #FFFFFF;
  font-size: 16px;
  cursor: pointer;
}

.register-button:hover {
  background-color: #4E80E4;
}</style>
<style>/* Estilos globales */
body {
  margin: 0;
  /* Fuente */
  font-family: 'Inter', sans-serif;

}</style>

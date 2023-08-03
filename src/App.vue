<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!--
  <Estudiante/>
  <br>
  <h1>Guardar estudiante</h1>
   <GuardaEstudiante/>
   <h1>Actualizar estudiante</h1>
   <ActualizarEstudiante/>
   <h1>Eliminar estudiante</h1>
 <EliminarEstudiante/>
 -->
 <h1>ESTUDIANTE</h1>
<NavBar></NavBar>
<router-view></router-view>
</template>

<script>
import NavBar from './modules/estudiante/components/NavBar.vue'
/*
import ActualizarEstudiante from './modules/estudiante/pages/ActualizarEstudiante.vue';
import Estudiante from './modules/estudiante/pages/ConsultaEstudiante.vue'
import EliminarEstudiante from './modules/estudiante/pages/EliminarEstudiante.vue';
import GuardaEstudiante from './modules/estudiante/pages/GuardaEstudiante.vue'
*/ 


export default {
  name: 'App',
  components: {
    NavBar
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button{
  border: none;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
}
button:hover{
  background-color: #7ab89c;
}

</style>

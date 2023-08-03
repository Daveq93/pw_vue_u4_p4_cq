<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Estudiante/>
  <br>
  <h1>Guardar estudiante</h1>
   <GuardaEstudiante/>
   <h1>Actualizar estudiante</h1>
   <ActualizarEstudiante/>
   <h1>Eliminar estudiante</h1>
 <EliminarEstudiante/>
</template>

<script>
import ActualizarEstudiante from './modules/estudiante/pages/ActualizarEstudiante.vue';
import Estudiante from './modules/estudiante/pages/ConsultaEstudiante.vue'
import EliminarEstudiante from './modules/estudiante/pages/EliminarEstudiante.vue';
import GuardaEstudiante from './modules/estudiante/pages/GuardaEstudiante.vue'


export default {
  name: 'App',
  components: {
    Estudiante,
    GuardaEstudiante,
    ActualizarEstudiante,
    EliminarEstudiante
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
</style>

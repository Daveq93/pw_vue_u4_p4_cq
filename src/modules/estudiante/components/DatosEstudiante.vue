<template>
  <div class="containerDatosEstudiante">
    <label for="cedula">Cedula:</label>
    <input id="cedula" v-model="cedula" type="text">
    

    <label for="nombre">Nombre</label>
    <input id="nombre" v-model="nombre" type="text">
    
    <label for="apellido">Apellido</label>
    <input id="apellido" v-model="apellido" type="text">
    
    <button @click="consultarEstudiante">Consultar</button>
  </div>
</template>

<script>
import {obtenerEstudianteFachada} from "../helpers/EstudianteCliente"
export default {
data(){
    return {
        cedula:null,
        nombre:null,
        apellido:null
    }
},
methods:{
   async consultarEstudiante(){
    const data = await obtenerEstudianteFachada(this.cedula);
    this.nombre=data.nombre;
    this.apellido=data.apellido;
       
    }
}

};
</script>

<style>
.containerDatosEstudiante{
  display: flex;
  justify-content: center;
  display: grid;
  align-items: center;
}
</style>


<template>
  <label for="id">ID</label>
    <input id="id" v-model="id" type="text">
    
    <button @click="eliminarEstudiante">Eliminar</button>
</template>

<script>
import { eliminarEstudianteFachada } from '../helpers/EstudianteCliente';
export default {
    data(){
    return {
        id:null,
    }
},
methods:{
   async eliminarEstudiante(){
    const data = eliminarEstudianteFachada(this.id);
   console.log(data);
       
    }
}
}
</script>

<style>

</style>
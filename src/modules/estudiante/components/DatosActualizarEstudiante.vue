<template>

<label for="id">ID</label>
  <input id="id" v-model="id" type="text" />

    <label for="cedula">Cedula</label>
  <input id="cedula" v-model="cedula" type="text" />

  <label for="nombre">Nombre</label>
  <input id="nombre" v-model="nombre" type="text" />

  <label for="apellido">Apellido</label>
  <input id="apellido" v-model="apellido" type="text" />

  
  <button @click="actualizarEstudiante">Actualizar</button>
</template>

<script>
import { actualizarEstudianteFachada } from "../helpers/EstudianteCliente";
export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
      provincia:null,
      id:null,
    };
  },
  methods: {
    async actualizarEstudiante() {
      const data = {
        cedula:this.cedula,
        nombre:this.nombre,
        apellido:this.apellido,
        provincia:"pichincha"
      };

      await actualizarEstudianteFachada(data,this.id);
    },
  },
};
</script>

<style></style>
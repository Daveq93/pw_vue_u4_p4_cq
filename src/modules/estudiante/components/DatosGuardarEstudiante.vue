<template>
    <label for="cedula">Cedula</label>
  <input id="cedula" v-model="cedula" type="text" />

  <label for="nombre">Nombre</label>
  <input id="nombre" v-model="nombre" type="text" />

  <label for="apellido">Apellido</label>
  <input id="apellido" v-model="apellido" type="text" />

  
  <button @click="guardarEstudiante">Guardar</button>
</template>

<script>
import { ingresarEstudianteFachada } from "../helpers/EstudianteCliente";
export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
      provincia:null
    };
  },
  methods: {
    async guardarEstudiante() {
      const data = {
        cedula:this.cedula,
        nombre:this.nombre,
        apellido:this.apellido,
        provincia:"pichincha"
      };

      await ingresarEstudianteFachada(data);
    },
  },
};
</script>

<style></style>

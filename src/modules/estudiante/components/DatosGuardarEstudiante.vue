<template>
  <div class="containerDatosEstudiante">
    <table>
      <tbody>
        <tr>
          <td><label for="cedula">Cedula:</label></td>
          <td>
            <input
              id="cedula"
              v-model="cedula"
              type="text"
              placeholder="Ingrese cedula"
            />
          </td>
        </tr>
        <tr>
          <td><label for="nombre">Nombre:</label></td>
          <td>
            <input id="nombre" v-model="nombre" type="text" />
          </td>
        </tr>
        <tr>
          <td><label for="apellido">Apellido:</label></td>
          <td><input id="apellido" v-model="apellido" type="text" /></td>
        </tr>
        <tr>
          <td><label for="fechaNacimiento">Fecha de Nacimiento:</label></td>
          <td>
            <input
              id="fechaNacimiento"
              v-model="fechaNacimiento"
              type="datetime-local"
            />
          </td>
        </tr>
        <tr>
          <td><label for="provincia">Provincia:</label></td>
          <td><input id="provincia" v-model="provincia" type="text" /></td>
        </tr>
      </tbody>
    </table>

    <button @click="guardarEstudiante">Guardar</button>
  </div>
</template>

<script>
import { ingresarEstudianteFachada } from "../helpers/EstudianteCliente";
export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
      fechaNacimiento: null,
      provincia: null,
    };
  },
  methods: {
     guardarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fechaNacimiento,
        provincia: this.provincia,
      };

       ingresarEstudianteFachada(data);

      this.cedula="",
      this.nombre="",
      this.apellido="",
      this.provincia=""

    },
  },
};
</script>

<style>
.containerDatosEstudiante {
  display: flex;
  justify-content: center;
  display: grid;
  align-items: center;
  margin-top: 20px;
}

input{
  text-transform: capitalize;
}

</style>

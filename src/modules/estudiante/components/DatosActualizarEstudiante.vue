<template>
  <div class="containerDatosEstudiante">
    <table>
      <tbody>
        <tr>
          <td><label for="id">ID:</label></td>
          <td>
            <input
              id="id"
              v-model="id"
              type="number"
              placeholder="Ingrese ID"
            />
          </td>
        </tr>
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
    <button @click="actualizarEstudiante">Actualizar</button>
  </div>
</template>

<script>
import { actualizarEstudianteFachada } from "../helpers/EstudianteCliente";
export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
      provincia: null,
      id: null,
    };
  },
  methods: {
    async actualizarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento:this.fechaNacimiento,
        provincia: this.provincia,
      };

       actualizarEstudianteFachada(data, this.id);
if(Response==200){
  alert(`Estudiante ${this.nombre} actulizado coorectamente`);
}

    },
  },
};
</script>

<style></style>

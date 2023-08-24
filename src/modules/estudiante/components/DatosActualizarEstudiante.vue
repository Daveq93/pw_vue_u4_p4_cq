<template>
  <div class="containerDatosEstudiante">
    <table>
      <tbody>
        <tr>
          <td>
            <div class="form-floating mb-3">
              <input
              v-model="id"
                type="number"
                class="form-control"
                id="floatingInput"
                placeholder="Ingrese ID"
              />
              <label for="floatingInput">ID</label>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="form-floating mb-3">
              <input
              v-model="cedula"
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Ingrese cedula de identidad"
              />
              <label for="floatingInput">Cedula</label>
            </div>
          </td>
        </tr>
        <tr>
      
          <td>
            <div class="form-floating mb-3">
              <input
              v-model="nombre"
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Ingrese nombre"
              />
              <label for="floatingInput">Nombre</label>
            </div>
          </td>
        </tr>
        <tr>

          <td>
            <div class="form-floating mb-3">
              <input
              v-model="apellido"
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Ingrese apellido"
              />
              <label for="floatingInput">Apellido</label>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="form-floating mb-3">
              <input
              v-model="fechaNacimiento"
                type="datetime-local"
                class="form-control"
                id="floatingInput"
              />
              <label for="floatingInput">Fecha de nacimiento</label>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="form-floating mb-3">
              <input
              v-model="provincia"
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Ingrese provincia"
              />
              <label for="floatingInput">Provincia</label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <button type="button" class="btn btn-primary" @click="actualizarEstudiante">Actualizar</button>
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
      fechaNacimiento:null,
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

<style>

.containerDatosEstudiante {
  display: flex;
  justify-content: center;
  display: grid;
  align-items: center;
  margin-top: 20px;
}

input {
  text-transform: capitalize;
}
</style>

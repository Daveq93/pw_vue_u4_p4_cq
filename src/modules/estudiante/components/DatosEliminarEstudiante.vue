<template>
  <div class="containerEliminar">
    <table>
      <tbody>
        <tr>
          <td><label for="id">ID</label></td>
          <td><input id="id" v-model="id" type="number" placeholder="Ingrese iD de estudiante"/></td>
        </tr>
      </tbody>
    </table>

    <button @click="eliminarEstudiante">Eliminar</button>
  </div>
</template>

<script>
import { eliminarEstudianteFachada } from "../helpers/EstudianteCliente";
export default {
  data() {
    return {
      id: null,
    };
  },
  methods: {
    async eliminarEstudiante() {
      const data = eliminarEstudianteFachada(this.id);
        
      console.log(data);
    },
  },
};
</script>

<style>
input{
    width: 200px;
}

.containerEliminar{
    display: flex;
  justify-content: center;
  display: grid;
  align-items: center;
 
  margin-top: 20px;
}
</style>

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
            <input id="nombre" v-model="nombre" type="text" disabled="false" />
          </td>
        </tr>
        <tr>
          <td><label for="apellido">Apellido:</label></td>
          <td><input id="apellido" v-model="apellido" type="text" disabled="false" /></td>
        </tr>
        <tr>
          <td><label for="fechaNacimiento">Fecha de Nacimiento:</label></td>
          <td>
            <input
              id="fechaNacimiento"
              v-model="fechaNacimiento"
              type="datetime-local"
              disabled="false"
            />
          </td>
        </tr>
        <tr>
          <td><label for="provincia">Provincia:</label></td>
          <td><input id="provincia" v-model="provincia" type="text" disabled="false" /></td>
        </tr>
      </tbody>
    </table>

    <button @click="consultarEstudiante">Consultar</button>
  </div>
</template>

<script>
import { obtenerEstudianteFachada } from "../helpers/EstudianteCliente";
export default {
  data() {
    return {
      cedula: this.$route.params.ced,
      nombre: null,
      apellido: null,
      fechaNacimiento:null,
      provincia:null,
      showModalSave:false
    };
  },
  methods: {
    async consultarEstudiante() {
      const data = await obtenerEstudianteFachada(this.cedula);
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.fechaNacimiento=data.fechaNacimiento;
      this.provincia=data.provincia;
    },
  },
  mounted(){
      const{ced}= this.$route.params;
      
      console.log("Imprimiendo ced component: "+ced);
     // this.cedula=ced;
     this.consultarEstudiante();
     ////////////////
      console.log(this.$route)
     const prov= this.$route.query.provincia;
     const variable = this.$route.query.variable;
     console.log("provincia: "+prov);
     console.log("variable: "+variable);
      
  }
};
</script>

<style scoped>
.containerDatosEstudiante {
  display: flex;
  justify-content: center;
  display: grid;
  align-items: center;
 
  margin-top: 20px;
 
}

td, label{
  text-align: right;
  margin-right: 10px;
}

</style>

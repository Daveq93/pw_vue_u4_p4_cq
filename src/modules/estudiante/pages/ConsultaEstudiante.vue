<template>
  <DatosEstudiante />
</template>

<script>
import DatosEstudiante from "../components/DatosEstudiante.vue";
export default {
  components: {
    DatosEstudiante,
  },
  mounted(){
      const{ced}= this.$route.params;
      console.log("Imprimiendo ced: "+ced);
  }
};
</script>

<style></style>

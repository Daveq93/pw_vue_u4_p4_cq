<template>
   <div class="links"> 
    <router-link to="/busca">Buscar</router-link>
    <router-link to="/guarda">Guardar</router-link>
    <router-link to="/actualiza">Actualizar</router-link>
    <router-link to="/elimina">Eliminar</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
div{
    padding: 0 30px;
}
div a{
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
}
a{
    text-decoration-line: none;
}
a:hover{
    background-color:#41B883 ;
}

</style>
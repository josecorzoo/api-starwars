<template>

<div class="card bg-transparent">
  <div class="alert alert-dark bg-dark col-sm-12 mb-4 border-0" role="alert">
 <div class="float-left y-3">
   <a class=" text-white">P E L I C U L A S</a>
 </div>

</div>
  <table class="table table-striped table-dark table-sm">
  <thead class="thead-dark">
    <tr>

      <th scope="col" class="text-center" style="font-size: 18px;">Titulo</th>
        <th scope="col" class="text-center" style="font-size: 18px;">Director</th>
        <th scope="col" class="text-center" style="font-size: 18px;">Fecha de lanzamiento</th>
        <th scope="col" class="text-center" style="font-size: 18px;">Acción</th>

    </tr>
  </thead>
  <tbody class="text-white">
    <template v-if="peliculas.length > 0" v-for="(pelicula, index) in peliculas">
        <tr>
          <td scope="row" style="font-size: 17px;">{{pelicula.title}}</td>
          <td scope="row" class="text-center" style="font-size: 17px;">{{pelicula.director}}</td>
          <td scope="row" class="text-center" style="font-size: 17px;">{{pelicula.release_date}}</td>
          <td class="text-center">
              <router-link :to="{ name: 'naves-peli', params: {id : getId(pelicula.url)} }"><i class="fas fa-bars"></i></router-link>  
          </td>
        </tr>
      </template>

      <template v-if="peliculas.length == 0">
        <tr>
          <td colspan="3" class="text-center">No hay peliculas</td>
        </tr>
      </template>
  </tbody>
</table>

</div>
</template>

<script>
    import toastr from "toastr";

    export default {
        data(){
          return {
            peliculas : []
          };
        },
        mounted() {
          this.$bus.$emit('loading', true);

          axios.get('https://swapi.co/api/films')
          .then(response => (
            this.peliculas = response.data.results,
            this.$bus.$emit('loading', false) )
          ).catch(error => (toastr.error("Ha ocurrido un error al obtener los datos."), this.$bus.$emit('loading', false)));

        },
        methods: {
          getId: function(url){
            return url.replace(/\D/g, "");;
          }
        }
    }
</script>

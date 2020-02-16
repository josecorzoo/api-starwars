<template>
<div class="card bg-transparent">

  <div class="alert alert-dark bg-dark col-sm-12 mb-4 border-0" role="alert">
 <div class="float-left y-3">
   <a class=" text-white">N A V E S</a>
 </div>

</div>

  <table class="table table-striped table-dark table-sm">
    <thead class="thead-dark">
      <tr>
        <th scope="col" class="text-center" style="font-size: 18px;">Nombre</th>
        <th scope="col" class="text-center" style="font-size: 18px;">Modelo</th>
        <th scope="col" class="text-center" style="font-size: 18px;">Acción</th>

      </tr>
    </thead>
    <tbody class="text-white">
      <template v-if="naves.length > 0" v-for="(nave, index) in naves">
        <tr>
          <td scope="row" style="font-size: 17px;">{{nave.name}}</td>
          <td scope="row" style="font-size: 17px;">{{nave.model}}</td>
          <td class="text-center">
            <router-link :to="{ name: 'info-nave', params: {id : getId(nave.url)} }"><i class="fas fa-bars"></i></router-link>
          </td>
        </tr>
      </template>

      <template v-if="naves.length == 0">
        <tr>
          <td colspan="3" class="text-center">No hay naves</td>
        </tr>
      </template>
    </tbody>
  </table>
</div>
</template>

<script>
    import toastr from "toastr";

    export default {
        beforeMount(){
          this.getPelicula();
        },
        data(){
          return {
            pelicula : [],
            naves : []
          };
        },
        mounted() {

        },
        methods: {

          getPelicula(){
            this.$bus.$emit('loading', true);

            axios.get('https://swapi.co/api/films/' + this.$route.params.id)
            .then(response => (this.pelicula = response.data, this.getNaves()))
            .catch(error => (toastr.error("Ha ocurrido un error al obtener los datos."), this.$bus.$emit('loading', false)));
          },
          getNaves(){
            if(this.pelicula.length != []){
             $.each(this.pelicula.starships, ( key, url ) => {
               axios.get('https://swapi.co/api/starships/' + this.getId(url))
               .then(response => this.naves.push(response.data))
             });
            }
            this.$bus.$emit('loading', false);
          },
          getId: function(url){
            return url.replace(/\D/g, "");;
          }

        }
    }
</script>

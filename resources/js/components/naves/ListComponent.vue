<template>
<div class="card bg-transparent">

  <div class="alert alert-dark bg-dark col-sm-12 mb-4 border-0" role="alert">
 <div class="float-left y-3">
   <a class=" text-white">NAVES GUARDADAS</a>
 </div>

</div>

  <table class="table table-striped table-dark table-sm">
  <thead class="thead-dark">
    <tr>
        <th scope="col" class="text-center" style="font-size: 18px;">Noombre</th>
        <th scope="col" class="text-center" style="font-size: 18px;">Modelo</th>
        <th scope="col" class="text-center" style="font-size: 18px;" colspan="2">Acción</th>
    </tr>
  </thead>

  <tbody class="text-white">
    <template v-if="naves.length > 0" v-for="(nave, index) in naves">
      <tr>
        <td scope="row" style="font-size: 17px;">{{nave.name}}</td>
        <td scope="row" style="font-size: 17px;">{{nave.model}}</td>
        <td class="text-center">
          <router-link :to="{ name: 'naves-info', params: {id : nave.id} }"><i class="fas fa-bars"></i></router-link>
          <button class="bg-transparent border-0" @click="eliminar(nave.id)"><i class="fas fa-minus-circle" style="color: red;"></i></button>
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
    import Starship from "../models/Starship";

    export default {
        data(){
          return {
            naves : []
          };
        },
        mounted() {
            this.$bus.$emit('loading', true);

            Starship.index((response) => {
              this.naves = response.data;
              this.$bus.$emit('loading', false);
            });
        },

        methods: {
          eliminar(id){
            var index = this.naves.findIndex(x => x.id === id);
            Starship.destroy(id, (response) => {
              toastr.success(response.data.success);
              this.naves.splice(index,1);
            },
            (error) => {
              toastr.error(error);
            });
          }
        }

    }
</script>

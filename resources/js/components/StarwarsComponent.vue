<template>

    <div class="container">

      <loading :active.sync="isLoading"
          :is-full-page="fullPage" :color="'#FFE033'" :loader="'bars'" :height="125" :width="125"></loading>

      <div class="jumbotron p-2 bg-dark">
        <div class="row align-items-center">
          <div class="col col-12 col-sm-12 col-md-12 col-lg-3 text-center">
            <img class="img-fluid" :src="'/img/logonew.png'">
          </div>

          <div class="col col-12 col-sm-12 col-md-12 col-lg-9 mt-2 d-none d-sm-block">
            <h1 class="text-center text-white font-weight-bold">- S T A R W A R S -</h1>
          </div>
        </div>
      </div>


      <div class="row">

      <div class="col col-12 col-sm-12 col-lg-2 mb-4">

        <ul class="list-group bg-dark">
          <li class="list-group-item list-group-item-secondary bg-dark text-white">Menú</li>
          <li class="list-group-item list-group-item-action bg-dark "> <router-link :to="{ name: 'pelis' }">Películas</router-link> </li>
          <li class="list-group-item list-group-item-action bg-dark"> <router-link :to="{ name: 'naves' }">Mis Naves</router-link> </li>

        </ul>
      </div>

      <div class="col col-12 col-sm-12 col-lg-10">
        <router-view></router-view>
      </div>
    </div>


    </div>
</template>

<script>
    import Loading from 'vue-loading-overlay';

    export default {
      data() {
            return {
                isLoading: true,
                fullPage: true
            }
        },
      components: {
            Loading
        },
        mounted() {
          this.$bus.$on('loading', (status) => {
            this.isLoading = status;
          });
        }
    }
</script>

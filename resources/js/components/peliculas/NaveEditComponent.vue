<template>
  <div class="card text-white bg-transparent">
    <div class="alert alert-dark bg-dark border-0" role="alert">
  <div class="float-left">
    <a class="btn btn-link  bg-transparent text-white">Datos a editar</a>
  </div>

  <div class="float-right">
    <button type="submit" form="starshipForm" class="btn btn-primary" :disabled="click" @click="click = !click">Guardar</button>
  </div>
</div>
    <form id="starshipForm" class="needs-validation" :submit.prevent="storeNave()">

      <div class="card  mb-3 bg-dark">
        <div class="card-header border-white">Datos Nave</div>

          <div class="card-body">
            <div class="form-row">
              <div class="col-md-4 mb-3">
                <label>Nombre</label>
                  <input type="text" class="form-control" :class="[!nave.name ? 'is-invalid' : 'is-valid']" v-model="nave.name" required>
                  <small v-show="!nave.name" class="form-text text-danger">El nombre es requerido.</small>
              </div>

                <div class="col-md-4 mb-3">
                  <label>Modelo</label>
                    <input type="text" class="form-control" :class="[!nave.model ? 'is-invalid' : 'is-valid']" v-model="nave.model" required>
                    <small v-show="!nave.model" class="form-text text-danger">El modelo es requerido.</small>
                </div>

                  <div class="col-md-4 mb-3">
                    <label>Fabricante</label>
                      <input type="text" class="form-control" :class="[!nave.manufacturer ? 'is-invalid' : 'is-valid']" v-model="nave.manufacturer" required>
                      <small v-show="!nave.manufacturer" class="form-text text-danger">El fabricante es requerido.</small>
                  </div>

                      <div class="col-md-4 mb-3">
                        <label>Costo en creditos</label>
                          <input type="text" class="form-control" :class="[!nave.cost_in_credits ? 'is-invalid' : 'is-valid']" v-model="nave.cost_in_credits" required>
                          <small v-show="!nave.cost_in_credits" class="form-text text-danger">Costo en creditos es requerido.</small>
                      </div>
            </div>
          </div>
      </div>

  <!-- CAPACIDAD -->
      <div class="card  mb-3 bg-dark">
        <div class="card-header border-white">Datos Capacidad</div>
          <div class="card-body">
            <div class="form-row">

                <div class="col-md-4 mb-3">
                  <label>Personal</label>
                    <input type="text" class="form-control" :class="[!nave.crew ? 'is-invalid' : 'is-valid']" v-model="nave.crew" required>
                    <small v-show="!nave.crew" class="form-text text-danger">Personal es requerido.</small>
                </div>

                  <div class="col-md-4 mb-3">
                    <label>Pasajeros</label>
                      <input type="text" class="form-control" :class="[!nave.passengers ? 'is-invalid' : 'is-valid']" v-model="nave.passengers" required>
                      <small v-show="!nave.passengers" class="form-text text-danger">Pasajeros es requerido.</small>
                  </div>

                    <div class="col-md-4 mb-3">
                      <label>Capacidad de Carga</label>
                        <input type="text" class="form-control" :class="[!nave.cargo_capacity ? 'is-invalid' : 'is-valid']" v-model="nave.cargo_capacity" required>
                        <small v-show="!nave.cargo_capacity" class="form-text text-danger">Capacidad de Carga es requerido.</small>
                    </div>
            </div>
          </div>
      </div>
  <!-- TAMAÑO -->
      <div class="card  mb-3 bg-dark">
        <div class="card-header border-white">Datos Tamaño</div>
          <div class="card-body">
            <div class="form-row">

              <div class="col-md-4 mb-3">
                <label>Longitud</label>
                  <input type="text" class="form-control" :class="[!nave.length ? 'is-invalid' : 'is-valid']" v-model="nave.length" required>
                  <small v-show="!nave.length" class="form-text text-danger">Longitud es requerido.</small>
              </div>

                <div class="col-md-4 mb-3">
                  <label>Consumibles</label>
                    <input type="text" class="form-control" :class="[!nave.consumables ? 'is-invalid' : 'is-valid']" v-model="nave.consumables" required>
                    <small v-show="!nave.consumables" class="form-text text-danger">Consumibles es requerido.</small>
                </div>
            </div>
          </div>
      </div>
  <!-- aqui -->
      <div class="card mb-3 bg-dark">
        <div class="card-header border-white">Datos Velocidad</div>
          <div class="card-body">
            <div class="form-row">

              <div class="col-md-4 mb-3">
                <label>Velocidad máxima en la Atmosfera</label>
                  <input type="text" class="form-control" :class="[!nave.max_atmosphering_speed ? 'is-invalid' : 'is-valid']" v-model="nave.max_atmosphering_speed" required>
                  <small v-show="!nave.max_atmosphering_speed" class="form-text text-danger">Velocidad máxima en la Atmosfera es requerido.</small>
              </div>

                <div class="col-md-4 mb-3">
                  <label>Hipervelocidad</label>
                    <input type="text" class="form-control" :class="[!nave.hyperdrive_rating ? 'is-invalid' : 'is-valid']" v-model="nave.hyperdrive_rating" required>
                    <small v-show="!nave.hyperdrive_rating" class="form-text text-danger">Hipervelocidad es requerido.</small>
                </div>

                <div class="col-md-4 mb-3">
                  <label>Hipervelocidad</label>
                    <input type="text" class="form-control" :class="[!nave.MGLT ? 'is-invalid' : 'is-valid']" v-model="nave.MGLT" required>
                    <small v-show="!nave.MGLT" class="form-text text-danger">Hipervelocidad es requerido.</small>
                </div>
            </div>
          </div>
      </div>
    </form>
  </div>
</template>

<script>
    import toastr from "toastr";
    import Starship from "../models/Starship";

    export default {
        beforeMount(){
          this.getNave();
        },
        data(){
          return {
            nave : [],
            click : false
          };
        },
        mounted() {

        },
        methods: {

          getNave(){
            this.$bus.$emit('loading', true);

            axios.get('https://swapi.co/api/starships/' + this.$route.params.id)
            .then(response => (this.nave = response.data, this.$bus.$emit('loading', false)))
            .catch(error => (toastr.error("Ha ocurrido un error al obtener los datos."), this.$bus.$emit('loading', false)));
          },
          storeNave(){
            if(this.click){
              Starship.store(this.nave,
                response => {
                  if(response.data.success){
                    toastr.success(response.data.success);
                    this.$router.push({ name: 'naves' });
                  }
                  if(response.data.error){
                    toastr.error(response.data.error);
                    this.click = false;
                  }
                },
                error => {
                  toastr.error(response.data.error);
                });
            }
          }
        }
    }
</script>

<template>
  <div class="card bg-transparent">
    <div class="alert alert-dark bg-dark col-sm-12 mb-4 border-0" role="alert">
   <div class="float-left y-3">
     <a class="btn btn-link  bg-transparent text-white">Nave:  {{ nave.name }}</a>
   </div>

  </div>
  <div class="card col-sm-12 mb-4 text-white bg-dark">

      <div class="card-body">

        <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" id="nave-tab" data-toggle="tab" href="#nave" role="tab" aria-controls="home" >Nave</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="capacidad-tab" data-toggle="tab" href="#capacidad" role="tab" aria-controls="capacidad">Capacidad</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="tamaño-tab" data-toggle="tab" href="#tamaño" aria-controls="tamaño">Tamaño</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="velocidad-tab" data-toggle="tab" href="#velocidad" aria-controls="velocidad">Velocidad</a>
    </li>
  </ul>



  <div class="tab-content">

    <div class="tab-pane fade show active" id="nave" role="tabpanel" aria-labelledby="nave-tab">
      <br>
      <div class="form-group row border-bottom border-info">
        <label class="col-sm-4">Nombre:</label>
          <div>
            <label>{{ nave.name }}</label>
          </div>
      </div>

      <div class="form-group row border-bottom border-info">
        <label class="col-sm-4">Modelo:</label>
          <div>
            <label>{{ nave.model }}</label></p>
          </div>
      </div>

      <div class="form-group row border-bottom border-info">
        <label class="col-sm-4">Fabricante:</label>
          <div>
            <label>{{ nave.manufacturer }}</label></p>
          </div>
      </div>

      <div class="form-group row border-bottom border-info">
        <label class="col-sm-4">Costo en creditos:</label>
          <div>
            <label>{{ nave.cost_in_credits }}</label></p>
          </div>
      </div>

    </div>





    <div class="tab-pane fade" id="capacidad" role="tabpanel" aria-labelledby="capacidad-tab">
  <br>
      <div class="form-group row border-bottom border-info">
        <label class="col-sm-4">Personal:</label>
          <div>
            <label>{{ nave.crew }}</label></p>
          </div>
      </div>

      <div class="form-group row border-bottom border-info">
        <label class="col-sm-4">Pasajeros:</label>
          <div>
            <label>{{ nave.passengers }}</label></p>
          </div>
      </div>

      <div class="form-group row border-bottom border-info">
        <label class="col-sm-4">Capacidad de Carga:</label>
          <div>
            <label>{{ nave.cargo_capacity }}</label></p>
          </div>
      </div>



    </div>
    <div class="tab-pane fade" id="tamaño" role="tabpanel" aria-labelledby="tamaño-tab">
  <br>
      <div class="form-group row border-bottom border-info">
        <label class="col-sm-4">Longitud:</label>
          <div>
            <label>{{ nave.length }}</label></p>
          </div>
      </div>




      <div class="form-group row border-bottom border-info">
        <label class="col-sm-4">Consumibles:</label>
          <div>
            <label>{{ nave.consumables }}</label></p>
          </div>
      </div>



    </div>

    <div class="tab-pane fade" id="velocidad" role="tabpanel" aria-labelledby="velocidad-tab">
  <br>

      <div class="form-group row border-bottom border-info">
        <label class="col-sm-4">Velocidad máxima en la Atmosfera:</label>
          <div>
            <label>{{ nave.max_atmosphering_speed }}</label></p>
          </div>
      </div>

      <div class="form-group row border-bottom border-info">
        <label class="col-sm-4">Hipervelocidad:</label>
          <div>
            <label>{{ nave.hyperdrive_rating }}</label></p>
          </div>
      </div>

      <div class="form-group row border-bottom border-info">
        <label class="col-sm-4">Velocidad Megaluz:</label>
          <div>
            <label>{{ nave.MGLT }}</label></p>
          </div>
      </div>


    </div>
  </div>

      </div>
    </div>
  </div>
</template>

<script>
    import Starship from "../models/Starship";

    export default {
      data(){
        return{
          nave: []
        };
      },
      beforeMount(){
        this.$bus.$emit('loading', true);

        Starship.show(this.$route.params.id,
          (response) => {
            this.nave = response.data;
            this.$bus.$emit('loading', false);
          },
          (error) => {
            toastr.error("Ha ocurrido un error al obtener los datos.");
            this.$bus.$emit('loading', false);
          }
        );
      },
      methods: {
        editar(){
          this.$router.push({ name: 'editar-nave', params: { id: this.getId(this.nave.url)} });
        }
      }
    }
</script>

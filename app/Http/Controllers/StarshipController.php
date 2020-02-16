<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Starship;

class StarshipController extends Controller
{

    public function index(){
      return Starship::all();
    }

    public function store(Request $request){
      if(Starship::where($request->except(['pilots','films','created','edited','url']))->get()->count() > 0){
        return response()->json([
          "error" => "La nave espacial ya ha sido guardada"
        ]);
      }

      $starship = Starship::create($request->except(['pilots','films','created','edited','url']));

      if($starship->save()){
        return response()->json([
          "success" => "Nave espacial guardada correctamente"
        ]);
      }
      else{
        return response()->json([
          "error" => "Ha ocurrido un error al guardar la nave espacial"
        ]);
      }
    }

    public function show($id){
      $starship = Starship::find($id);

      if($starship){
        return $starship;
      }
      else{
        return response()->json([
          "error" => "No se ha encontrado la nave espacial solicitada"
        ]);
      }
    }

    public function update(Request $request){
      $starship = Starship::find($request->id);
      $starship->update($request->all());

      if($starship->save()){
        return response()->json([
          "success" => "Nave espacial actualizada correctamente"
        ]);
      }
      else{
        return response()->json([
          "error" => "Ha ocurrido un error al actualizar la nave espacial"
        ]);
      }
    }

    public function destroy($id){
      $starship = Starship::find($id);

      if($starship->delete()){
        return response()->json([
          "success" => "Nave espacial ha sido eliminada correctamente"
        ]);
      }
      else{
        return response()->json([
          "error" => "Ha ocurrido un error al eliminar la nave espacial"
        ]);
      }
    }

}

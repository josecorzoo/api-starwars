<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Starship extends Model
{
    protected $fillable = [
        'name', 'model', 'manufacturer', 'cost_in_credits', 'length', 'max_atmosphering_speed', 'crew', 'passengers', 
        'cargo_capacity', 'consumables', 'hyperdrive_rating', 'MGLT', 'starship_class'
    ];
}

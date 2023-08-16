<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Items;

class ItemsController extends Controller
{
    public function store(Request $request){

        //dd($request->all());
        foreach( $request->all() as $item){
           // dd($item);
        Items::create([
           'name'=>$item['name'],
           'price'=>$item['price']
        ]);
    }

    }
}

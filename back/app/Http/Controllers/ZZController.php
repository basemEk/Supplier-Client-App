<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ZZ;

class ZZController extends Controller
{/**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $client_info = ZZ::all()->toArray();
        // $client_info = ClientInfo::where('id',$id)->with('orders')->first();
      
        return response()->json([
            'success' => true,
            'data' => $client_info
        ]);
        

    }

   /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    // public function create()
    // {
    //     //
    // }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
       $input=$request->all();
       $z=new ZZ();
       $z->fill($input);
       $z->save();


    



        if ($z) {
            return response()->json([
                'success' => true,
                'data' => $z
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, client information could not be added.'
            ], 500);
        }
    }

     /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $client_info = ClientInfo::find($id);

        if (!$client_info) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, client information with id ' . $id . ' can not be found.'
            ], 400);
        }


        return response()->json([
            'success' => true,
            'data' => $client_info
        ]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ClientInfo  $supplierInfo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $client_info = ClientInfo::find($id);

        if (!$client_info) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, client information with id ' . $id . ' cannot be found.'
            ], 400);
        }

        $updated = $client_info->fill($request->all())->save();

        if ($updated) {
            return response()->json([
                'success' => true,
                'data' => $client_info
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, client information could not be updated.'
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ClientInfo  $supplierInfo
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $client_info = ClientInfo::find($id);

        if (!$client_info) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, client information with id ' . $id . ' cannot be found.'
            ], 400);
        }

        if ($client_info->delete()) {
            return response()->json([
                'success' => true
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'client information could not be deleted.'
            ], 500);
        }
    }
}

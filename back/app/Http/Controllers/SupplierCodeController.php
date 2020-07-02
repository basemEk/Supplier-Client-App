<?php

namespace App\Http\Controllers;

use App\SubCategory;
use App\SupplierCode;
use Illuminate\Http\Request;

class SupplierCodeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $supplier_code = SupplierCode::all()->toArray();

        return response()->json([
            'success' => true,
            'data' => $supplier_code
        ]);

        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'code' => 'required',
            'supplier_info_id' => 'required',
        ]);

        $supplier_code = new SupplierCode();   

        $supplier_code->supplier_info_id = $request->supplier_info_id;
        $supplier_code->code = $request->code;


        if ($supplier_code->save()) {
            return response()->json([
                'success' => true,
                'data' => $supplier_code
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, supplier code could not be added.'
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
        $supplier_code = SupplierCode::find($id);

        if (!$supplier_code) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, supplier code with id ' . $id . ' can not be found.'
            ], 400);
        }


        return response()->json([
            'success' => true,
            'data' => $supplier_code
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $supplier_code = SupplierCode::find($id);

        if (!$supplier_code) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, supplier code with id ' . $id . ' cannot be found.'
            ], 400);
        }

        $updated = $supplier_code->fill($request->all())->save();

        if ($updated) {
            return response()->json([
                'success' => true,
                'data' => $supplier_code
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, supplier code could not be updated.'
            ], 500);
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $supplier_code = SupplierCode::find($id);

        if (!$supplier_code) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, supplier code with id ' . $id . ' can not be found.'
            ], 400);
        }

        if ($supplier_code->delete()) {
            return response()->json([
                'success' => true
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'supplier code could not be deleted.'
            ], 500);
        }
    }
}

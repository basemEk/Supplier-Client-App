<?php

namespace App\Http\Controllers;

use App\SupplierInfo;
use Illuminate\Http\Request;

class SupplierInfoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $supplier_info = SupplierInfo::all()->toArray();

        return response()->json([
            'success' => true,
            'data' => $supplier_info
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
            'supplier_name' => 'required',
            'email' => 'required',
            'company' => 'required',

        ]);

        $supplier_info = new SupplierInfo();   

        $supplier_info->supplier_name = $request->supplier_name;
        $supplier_info->email = $request->email;
        $supplier_info->company = $request->company;



        if ($supplier_info->save()) {
            return response()->json([
                'success' => true,
                'data' => $supplier_info
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, supplier information could not be added.'
            ], 500);
        }
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\SupplierInfo  $supplierInfo
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $supplier_info = SupplierInfo::find($id);

        if (!$supplier_info) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, the supplier information with id ' . $id . ' can not be found.'
            ], 400);
        }


        return response()->json([
            'success' => true,
            'data' => $supplier_info
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SupplierInfo  $supplierInfo
     * @return \Illuminate\Http\Response
     */
    public function edit(SupplierInfo $supplierInfo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SupplierInfo  $supplierInfo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $supplier_info = SupplierInfo::find($id);

        if (!$supplier_info) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, supplier information with id ' . $id . ' cannot be found.'
            ], 400);
        }

        $updated = $supplier_info->fill($request->all())->save();

        if ($updated) {
            return response()->json([
                'success' => true,
                'data' => $supplier_info
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, supplier information could not be updated.'
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
        $supplier_info = SupplierInfo::find($id);

        if (!$supplier_info) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, supplier information with id ' . $id . ' can not be found.'
            ], 400);
        }

        if ($supplier_info->delete()) {
            return response()->json([
                'success' => true
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'supplier information could not be deleted.'
            ], 500);
        }
    }
}

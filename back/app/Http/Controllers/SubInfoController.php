<?php

namespace App\Http\Controllers;

use App\SubInfo;
use Illuminate\Http\Request;

class SubInfoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        {
            $sub_info = SubInfo::all()->toArray();
    
            return response()->json([
                'success' => true,
                'data' => $sub_info
            ]);
    
            
        }
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
            'item_info_id' => 'required',
            'sub_categories_id' => 'required',
        ]);

        $sub_info = new SubInfo();   

        $sub_info->item_info_id = $request->item_info_id;
        $sub_info->sub_categories_id = $request->sub_categories_id;


        if ($sub_info->save()) {
            return response()->json([
                'success' => true,
                'data' => $sub_info
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, sub-category information could not be added.'
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
        $sub_info = SubInfo::find($id);

        if (!$sub_info) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, the sub-category information with id ' . $id . ' can not be found.'
            ], 400);
        }


        return response()->json([
            'success' => true,
            'data' => $sub_info
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
        $sub_info = SubInfo::find($id);

        if (!$sub_info) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, sub-category information with id ' . $id . ' cannot be found.'
            ], 400);
        }

        $updated = $sub_info->fill($request->all())->save();

        if ($updated) {
            return response()->json([
                'success' => true,
                'data' => $sub_info
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, sub-category information could not be updated.'
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
        $sub_info = SubInfo::find($id);

        if (!$sub_info) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, sub-category information with id ' . $id . ' cannot be found.'
            ], 400);
        }

        if ($sub_info->delete()) {
            return response()->json([
                'success' => true
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'sub-category information could not be deleted.'
            ], 500);
        }
    }
}

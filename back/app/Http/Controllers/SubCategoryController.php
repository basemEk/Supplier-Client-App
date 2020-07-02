<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SubCategory;

class SubCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sub_categories = SubCategory::all()->toArray();

        return response()->json([
            'success' => true,
            'data' => $sub_categories
        ]);

    }



    public function getById($id){ 
        $s_category = SubCategory::where('id',$id)->with('informations')->first();

        return response()->json([
            "message" => "success",
            "category" => $s_category
        ]);
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
   

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required',
            'image' => 'required',
            'category_id' => 'required',

        ]);

        $sub_categories = new SubCategory();   

        $sub_categories->title = $request->title;
        $sub_categories->image = $request->image;
        $sub_categories->category_id = $request->category_id;



        if ($sub_categories->save()) {
            return response()->json([
                'success' => true,
                'data' => $sub_categories
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, sub-category product could not be added.'
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
        $sub_categories = SubCategory::find($id);

        if (!$sub_categories) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, sub-category product with id ' . $id . ' can not be found.'
            ], 400);
        }


        return response()->json([
            'success' => true,
            'data' => $sub_categories
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
        $sub_categories = SubCategory::find($id);

        if (!$sub_categories) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, sub-category product with id ' . $id . ' cannot be found.'
            ], 400);
        }

        $updated = $sub_categories->fill($request->all())->save();

        if ($updated) {
            return response()->json([
                'success' => true,
                'data' => $sub_categories
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, sub-category product could not be updated.'
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
        $sub_categories = SubCategory::find($id);

        if (!$sub_categories) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, sub-category product with id ' . $id . ' cannot be found.'
            ], 400);
        }

        if ($sub_categories->delete()) {
            return response()->json([
                'success' => true
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, sub-category product could not be deleted.'
            ], 500);
        }
    }
}

<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use App\SubCategory;


class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $categories = Category::all()->toArray();
        $temp_categories = [];
        
        //fetching the Category images from the database and display them
        foreach($categories as $category) {
            $category['image']= url('/uploads/categories/' . $category['image']);
            $temp_categories[] = $category;
        }
        
        return response()->json([
            'success' => true,
            'data' => $temp_categories
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
            'title' => 'required',
            'image' => 'required',
            'supplier_info_id' => 'required',
        ]);

        $category = new Category();

        $category->supplier_info_id = $request->supplier_info_id;
        $category->title = $request->title;
        $category->image = $request->image;



        if ($category->save()) {
            return response()->json([
                'success' => true,
                'data' => $category
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, the category could not be added.'
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
        $category = Category::find($id);

        if (!$category) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, the category with id ' . $id . ' can not be found.'
            ], 400);
        }


        return response()->json([
            'success' => true,
            'data' => $category
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
        $category = Category::find($id);

        if (!$category) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, the category with id ' . $id . ' cannot be found.'
            ], 400);
        }

        $updated = $category->fill($request->all())->save();

        if ($updated) {
            return response()->json([
                'success' => true,
                'data' => $category
            ]);

        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, the category could not be updated.'
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
        $category = Category::find($id);

        if (!$category) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, the category with id ' . $id . ' cannot be found.'
            ], 400);
        }

        if ($category->delete()) {
            return response()->json([
                'success' => true
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'the category could not be deleted.'
            ], 500);
        }
    }


    public function getCategoryProducts($id)
    {
       
        $category = Category::find($id);

        if (!$category) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, the category with id ' . $id . ' can not be found.'
            ], 400);
        }
        
        //the relation between the subCategory and the category
        $sub_categories = $category->subCategories;

        $products = [];

        foreach($sub_categories as $sub_category) {

            foreach($sub_category->items->toArray() as $product) {
                $product['sub_category'] = $sub_category->toArray(); 
                $products[] = $product;
            }
        }

        
        return response()->json([
            'success' => true,
            'data' => $products,
        ]);
    }
}

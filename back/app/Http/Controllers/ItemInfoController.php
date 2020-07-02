<?php

namespace App\Http\Controllers;

use App\ItemInfo;
use Illuminate\Http\Request;

class ItemInfoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $item_info = ItemInfo::all()->toArray();

        return response()->json([
            'success' => true,
            'data' => $item_info
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
            'description' => 'required',
            'price_lbp' => 'required',
            'price_dollar' => 'required',
            'minimum_quantity' => 'required',
        ]);

        $item_info = new ItemInfo();  

        $item_info->title = $request->title;
        $item_info->image = $request->image;
        $item_info->description = $request->description;
        $item_info->price_lbp = $request->price_lbp;
        $item_info->price_dollar = $request->price_dollar;
        $item_info->minimum_quantity = $request->minimum_quantity;



        if ($item_info->save()) {
            return response()->json([
                'success' => true,
                'data' => $item_info
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, product information could not be added.'
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ItemInfo  $itemInfo
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $item_info = ItemInfo::find($id);

        if (!$item_info) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, the product information with id ' . $id . ' can not be found.'
            ], 400);
        }


        return response()->json([
            'success' => true,
            'data' => $item_info
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ItemInfo  $itemInfo
     * @return \Illuminate\Http\Response
     */
    public function edit(ItemInfo $itemInfo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ItemInfo  $itemInfo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $item_info = ItemInfo::find($id);

        if (!$item_info) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, product information with id ' . $id . ' cannot be found.'
            ], 400);
        }

        $updated = $item_info->fill($request->all())->save();

        if ($updated) {
            return response()->json([
                'success' => true,
                'data' => $item_info
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, product information could not be updated.'
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ItemInfo  $itemInfo
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $item_info = ItemInfo::find($id);

        if (!$item_info) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, product information with id ' . $id . ' cannot be found.'
            ], 400);
        }

        if ($item_info->delete()) {
            return response()->json([
                'success' => true
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'product information could not be deleted.'
            ], 500);
        }
    }
}

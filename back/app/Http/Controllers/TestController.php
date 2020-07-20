<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Test;
class TestController extends Controller
{ //

    public function index()
    {
        $ordered_item = Test::all()->toArray();

        return response()->json([
            'success' => true,
            'data' => $ordered_item
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
        // $this->validate($request, [
        //     'quantity' => 'required',
        //     'lbp_price' => 'required',
        //     'dollar_price' => 'required',
        //     'available' => 'required',
        //     'order_history_id' => 'required',
        //     'item_info_id' => 'required',
        // ]);

        $inputs = $request->all();
        $order = new Test();
        $order->fill($inputs);
        $order->save();




        // $ordered_item = new OrderedItem();   

        // $ordered_item->quantity = $request->quantity;
        // $ordered_item->lbp_price = $request->lbp_price;
        // $ordered_item->dollar_price = $request->dollar_price;
        // $ordered_item->available = $request->available;
        // $ordered_item->order_history_id = $request->order_history_id;
        // $ordered_item->item_info_id = $request->item_info_id;


        if ($order->save()) {
            return response()->json([
                'success' => true,
                'data' => $order
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, ordered item can not be added.'
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
        $ordered_item = Test::find($id);

        if (!$ordered_item) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, ordered item with id ' . $id . ' can not be found.'
            ], 400);
        }


        return response()->json([
            'success' => true,
            'data' => $ordered_item
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
        $ordered_item = Test::find($id);

        if (!$ordered_item) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, ordered item with id ' . $id . ' cannot be found.'
            ], 400);
        }

        $updated = $ordered_item->fill($request->all())->save();

        if ($updated) {
            return response()->json([
                'success' => true,
                'data' => $ordered_item
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, ordered item could not be updated.'
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
        $ordered_item = Test::find($id);

        if (!$ordered_item) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, ordered item with id ' . $id . ' can not be found.'
            ], 400);
        }

        if ($ordered_item->delete()) {
            return response()->json([
                'success' => true
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'ordered item can not be deleted.'
            ], 500);
        }
    }
}


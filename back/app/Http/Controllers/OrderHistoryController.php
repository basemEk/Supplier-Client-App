<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\OrderHistory;

class OrderHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $order_history = OrderHistory::all()->toArray();

        return response()->json([
            'success' => true,
            'data' => $order_history
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
            'invoice' => 'required',
            'client_info_id' => 'required',
            'supplier_info_id' => 'required',
        ]);

        $order_history = new OrderHistory();   

        $order_history->supplier_info_id = $request->supplier_info_id;
        $order_history->invoice = $request->invoice;
        $order_history->client_info_id = $request->client_info_id;



        if ($order_history->save()) {
            return response()->json([
                'success' => true,
                'data' => $order_history
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, order history could not be added.'
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
        $order_history = OrderHistory::find($id);

        if (!$order_history) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, order history with id ' . $id . ' can not be found.'
            ], 400);
        }


        return response()->json([
            'success' => true,
            'data' => $order_history
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
        $order_history = OrderHistory::find($id);

        if (!$order_history) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, order history with id ' . $id . ' cannot be found.'
            ], 400);
        }

        $updated = $order_history->fill($request->all())->save();

        if ($updated) {
            return response()->json([
                'success' => true,
                'data' => $order_history
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, order history could not be updated.'
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
        $order_history = OrderHistory::find($id);

        if (!$order_history) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, order history with id ' . $id . ' can not be found.'
            ], 400);
        }

        if ($order_history->delete()) {
            return response()->json([
                'success' => true
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'order history could not be deleted.'
            ], 500);
        }
    }
}

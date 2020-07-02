<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contact_us = Contact::all()->toArray();

        return response()->json([
            'success' => true,
            'data' => $contact_us
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
            'email' => 'required',
            'message' => 'required',
        ]);

        $contact_us = new Contact();   

        $contact_us->email = $request->email;
        $contact_us->message = $request->message;


        if ($contact_us->save()) {
            return response()->json([
                'success' => true,
                'data' => $contact_us
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, the contact us page can not be added.'
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
        $contact_us = Contact::find($id);

        if (!$contact_us) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, contact us page with id ' . $id . ' can not be found.'
            ], 400);
        }


        return response()->json([
            'success' => true,
            'data' => $contact_us
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
        $contact_us = Contact::find($id);

        if (!$contact_us) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, the category with id ' . $id . ' cannot be found.'
            ], 400);
        }

        $updated = $contact_us->fill($request->all())->save();

        if ($updated) {
            return response()->json([
                'success' => true,
                'data' => $contact_us
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, contact us page could not be updated.'
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
        $contact_us = Contact::find($id);

        if (!$contact_us) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, contact us page with id ' . $id . ' can not be found.'
            ], 400);
        }

        if ($contact_us->delete()) {
            return response()->json([
                'success' => true
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'contact us page could not be deleted.'
            ], 500);
        }
    }
}

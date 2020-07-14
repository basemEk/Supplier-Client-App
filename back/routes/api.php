<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/sub/category','SubCategoryController@index');
Route::get('/sub/category/{id}','SubCategoryController@getById');
Route::get('/sub/category/{id}','SubCategoryController@show');
Route::post('/sub/category/create','SubCategoryController@store');
Route::put( '/sub/category/{id}', 'TestimonialsController@update' );
Route::delete('/sub/category/{id}', 'SubCategoryController@destroy');


Route::get('/category','CategoryController@index');
Route::get('/category/{id}','CategoryController@show');
Route::get('/category/{id}/products','CategoryController@getCategoryProducts');

Route::post('/category/create','CategoryController@store');
Route::put( '/category/{id}', 'CategoryController@update' );
Route::delete('/category/{id}', 'CategoryController@destroy');


Route::get('/client/info','ClientInfoController@index');
Route::get('/client/info/{id}','ClientInfoController@show');
Route::post('/client/info/create','ClientInfoController@store');
Route::put( '/client/info/{id}', 'ClientInfoController@update' );
Route::delete('/client/info/{id}', 'ClientInfoController@destroy');


Route::get('/contact','ContactController@index');
Route::get('/contact/{id}','ContactController@show');
Route::post('/contact/create','ContactController@store');
Route::put( '/contact/{id}', 'ContactController@update' );
Route::delete('/contact/{id}', 'ContactController@destroy');


Route::get('/item/info','ItemInfoController@index');
Route::get('/item/info/{id}','ItemInfoController@show');
Route::post('/item/info/create','ItemtInfoController@store');
Route::put('/item/info/{id}', 'ItemInfoController@update' );
Route::delete('/item/info/{id}', 'ItemInfoController@destroy');

//Get all | GET | ordered/item
//GET one item by ID | GET | ordered/item/{id}
//Create one item by ID | POST | ordered/item
Route::get('/ordered/item','OrderedItemController@index');
Route::get('/ordered/item/{id}','OrderedItemController@show');
Route::post('/ordered/item/create','OrderedItemController@store');
Route::put( '/ordered/item/{id}', 'OrderedItemController@update' );
Route::delete('/ordered/item/{id}', 'OrderedItemController@destroy');


Route::get('/order/history','OrderHistoryController@index');
Route::get('/order/history/{id}','OrderHistoryController@show');
Route::post('/order/history/create','OrderHistoryController@store');
Route::put('/order/history/{id}', 'OrderHistoryController@update' );
Route::delete('/order/history/{id}', 'OrderHistoryController@destroy');


Route::get('/sub/info','SubInfoController@index');
Route::get('/sub/info/{id}','SubInfoController@show');
Route::post('/sub/info/create','SubInfoController@store');
Route::put('/sub/info/{id}', 'SubInfoController@update' );
Route::delete('/sub/info/{id}', 'SubInfoController@destroy');


Route::get('/supplier/code','SupplierCodeController@index');
Route::get('/supplier/code/{id}','SupplierCodeController@show');
Route::post('/supplier/code/create','SupplierCodeController@store');
Route::put('/supplier/code/{id}', 'SupplierCodeController@update' );
Route::delete('/supplier/code/{id}', 'SupplierCodeController@destroy');


Route::get('/supplier/info','SupplierInfoController@index');
Route::get('/supplier/info/{id}','SupplierInfoController@show');
Route::post('/supplier/info/create','SupplierInfoController@store');
Route::put( '/supplier/info/{id}', 'SupplierInfoController@update' );
Route::delete('/supplier/info/{id}', 'SupplierInfoController@destroy'); //not working


Route::post('/register', 'AuthController@register');
Route::post('/login', 'AuthController@login');
Route::post('/logout', 'AuthController@logout');

Route::group(['middleware' => ['jwt.verify']], function() {
    Route::get('/tasks', 'TaskController@index');
    Route::get('/task/{id}', 'TaskController@show');
    Route::post('/task/{id}', 'TaskController@update');
    Route::post('/task', 'TaskController@store');
    Route::delete('/task/{id}', 'TaskController@destroy');
});

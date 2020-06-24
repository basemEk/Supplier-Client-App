import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Category from "./components/Category/Category";
import ContactUs from "./components/ContactUs/ContactUs";
import History from "./components/History/History";
import Home from "./components/Home/Home";
import ItemInfo from "./components/ItemInfo/ItemInfo";
import Notifications from "./components/Notifications/Notifications";
import OrderList from "./components/OrderList/OrderList";
import Schedule from "./components/Schedule/Schedule";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Statistics from "./components/Statistics/Statistics";
import SubCategories from "./components/SubCategories/SubCategories";
import SuccessOrder from "./components/SuccessOrder/SuccessOrder";
import SuggestProduct from "./components/SuggestProduct/SuggestProduct";
import SupplierCode from "./components/SupplierCode/SupplierCode";


class App extends React.Component {
    render() {
        return (
            <>
                <div className="app-content">
                    <Switch>
                        <Route path="/contact" exact>
                            <ContactUs />
                        </Route>
                        <Route path="/navbar" exact>
                            <Navbar />
                        </Route>
                        <Route path="/navbar/history" exact>
                            <History />
                        </Route>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/sub-categories/item-info" exact>
                            <ItemInfo />
                        </Route>
                        <Route path="/notifications" exact>
                            <Notifications />
                        </Route>
                        <Route path="/order-list" exact>
                            <OrderList />
                        </Route>
                        <Route path="supplier-code/schedule" exact>
                            <Schedule />
                        </Route>
                        <Route path="sign-in/sign-up" exact>
                            <SignUp />
                        </Route>
                        <Route path="/sign-in" exact>
                            <SignIn />
                        </Route>
                        <Route path="/statistics" exact>
                            <Statistics />
                        </Route>
                        <Route path="/sub-categories" exact>
                            <SubCategories />
                        </Route>
                        <Route path="order-list/success-order" exact>
                            <SuccessOrder />
                        </Route>
                        <Route path="/suggest-product" exact>
                            <SuggestProduct />
                        </Route>
                        <Route path="sign-in/supplier-code" exact>
                            <SupplierCode />
                        </Route>
                    </Switch>
                    <Category /> {/* attention gaby */}
                </div>
            </>
        );
    }
}

export default App;

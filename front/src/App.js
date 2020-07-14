import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Category from "./components/Category/Category";
import ContactUs from "./components/ContactUs/ContactUs";
import History from "./components/History/History";
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
import Footer from "./components/Footer/Footer";
// import Carousel from "./components/Carousel/Carousel";

class App extends React.Component {
	render() {
		return (
			<>
				<div className="app-content">
					<Switch>
						<Route path="/" exact component={SignIn} />
						<Route path="/sign-up" exact component={SignUp} />
						<Route path="/contact-us" exact component={ContactUs} />
						<Route path="/history" exact component={History} />
						<Route path="/home" exact component={Category} />
						<Route path="/notifications" exact component={Notifications} />
						<Route path="/order-list" exact component={OrderList} />
						<Route path="supplier-code/schedule" exact Component={Schedule} />
						<Route path="/statistics" exact component={Statistics} />
						<Route path="/sub-categories/:id" exact component={SubCategories} />
						<Route path="/suggest-product" exact component={SuggestProduct} />
						<Route path="/supplier-code" exact component={SupplierCode} />
                        <Route
							path="order-list/success-order"
							exact
							component={SuccessOrder}
						/>
                        <Route
							path="/sub-categories/item-info"
							exact
							component={ItemInfo}
						/>
					</Switch>
					<Footer />
					<Navbar />
				</div>
			</>
		);
	}
}

export default App;

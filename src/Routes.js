import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './components/auth/log/SignUp';
import Signin from './components/auth/log/SignIn';
import Home from './components/page/home/Home';
import PrivateRoute from './components/auth/Privateroute';
import Dashboard from './components/Dashboard/userDashboard/UserDashboard';
import AdminRoute from './components/auth/AdminRoute';
import AdminDashboard from './components/Dashboard/adminDashboard/AdminDashboard';
import AddProduct from './components/admin/AddProduct';
import Shop from './components/page/shop/Shop';
import Product from './components/page/product/Product';
import Cart from './components/page/cart/Cart';
import Orders from './components/admin/Orders';
import Profile from './components/Dashboard/profile/Profile';
import UpdateProduct from './components/admin/UpdateProduct';
import { PublicRoute } from './components/auth/PublicRoute';
import ScrollToTop from './scroll-to-top/scroll-to-top'
import Checkout from './components/page/checkout/Checkout';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <ScrollToTop>
                <PublicRoute path="/" exact component={Home} />
                <PublicRoute path="/shop" exact component={Shop} />
                <PublicRoute path="/checkout" exact component={Checkout} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
                <AdminRoute path="/create/product" exact component={AddProduct} />
                <Route path="/product/:productId" exact component={Product} />
                <PublicRoute path="/cart" exact component={Cart} />
                <AdminRoute path="/admin/orders" exact component={Orders} />
                <PrivateRoute path="/profile/:userId" exact component={Profile} />
                <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct} />
                </ScrollToTop>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
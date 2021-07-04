import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from "./pages/home-page/home-page.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import CategoriesPage from "./pages/categories-page/categories-page.ccomponent";
import ProductsPage from "./pages/products-page/products-page.ccomponent";
import ViewProductPage from "./pages/view-product-page/view-product-page.component";





function App() {
  return (
      <React.Fragment>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route  exact path="/shop/mark/category/products/view" component={ViewProductPage}/>
            <Route  path="/shop/mark/category" component={ProductsPage}/>
            <Route  path="/shop/mark" component={CategoriesPage}/>
            <Route  path="/shop" component={ShopPage}/>
        </Switch>
      </React.Fragment>
  );
}

export default App;

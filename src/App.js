import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from "./pages/home-page/home-page.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import CategoriesPage from "./pages/categories-page/categories-page.ccomponent";





function App() {
  return (
      <React.Fragment>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route  path="/shop/mark/categories" component={CategoriesPage}/>
            <Route  path="/shop/marks" component={ShopPage}/>
        </Switch>
      </React.Fragment>
  );
}

export default App;

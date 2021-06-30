import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from "./pages/home-page/home-page.component";
import ShopPage from "./pages/shop-page/shop-page.component";





function App() {
  return (
      <React.Fragment>
        <switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shop" component={ShopPage}/>
        </switch>
      </React.Fragment>
  );
}

export default App;

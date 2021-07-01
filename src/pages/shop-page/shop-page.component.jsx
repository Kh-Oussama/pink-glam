import React from 'react';
import {Header} from "./Header";
import CardList from "./CardList";
import './shop-page.styles.scss'
import NavigationBar from "../../components/navigation-bar/navigation-bar.component";

const ShopPage = () => {
    return (
        <div className="shop-page">
            <NavigationBar/>
            <div className="container">
                <Header />
                <CardList />
            </div>
        </div>
    )
}

export default ShopPage;
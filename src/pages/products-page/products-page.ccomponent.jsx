import React from 'react';
import NavigationBar from "../../components/navigation-bar/navigation-bar.component";
import {CardList} from "./CardList";
import {Header} from "../shop-page/Header";
import SubscribeFooterSection from "../../components/subscribe-footer-section/subscribe-footer-section.component";


const ProductsPage = () => {
    return (
        <div className="Products-page">
            <NavigationBar/>
            <div className="container">
                <Header title={'les produits disponibles'}/>
                <CardList />
            </div>
            <SubscribeFooterSection/>
        </div>
    )
}

export default ProductsPage;